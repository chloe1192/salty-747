class FMCDlnkWeather {
    static ShowPage(fmc, store = {"origin": "----", "destination": "----", "alternate": "----", "airport": "----", "sendStatus": ""}) {
        fmc.clearDisplay();
        
        if (fmc.flightPlanManager.getOrigin() && fmc.flightPlanManager.getDestination()) {
            store.origin = fmc.flightPlanManager.getOrigin().ident;
            store.destination = fmc.flightPlanManager.getDestination().ident;
        }

        const updateView = () => {        
            fmc.setTemplate([
                ["WX REQUEST"],
                ["\xa0ORIGIN", "DESTINATION"],
                [`<${store.origin}`, `${store.destination}>`],
                ["\xa0ALTERNATE", "AIRPORT"],
                [`<${store.alternate}`, `${store.airport}>`],
                [""],
                [""],
                ["", "REQUEST\xa0"],
                ["", "METAR>"],
                ["\xa0RECEIVED", "REQUEST\xa0"],
                ["<MESSAGES", "TAF>"],
                ["\xa0RETURN TO", "REQUEST\xa0"],
                ["<ACARS MENU", "SHORT TAF>"]
            ]);
        };
        updateView();
        
        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }

        fmc.onRightInput[3] = async () => {
            store["sendStatus"] = "SENDING";
            updateView();
            const icaos = [store["origin"], store["destination"], store["alternate"], store["airport"]];
            const lines = [];
            const newMessage = { "id": Date.now(), "type": reqTypes[store.reqID], "time": '00:00', "opened": null, "content": lines, };
            fmc.clearUserInput();

            const getInfo = async () => {
                getMETAR(icaos, lines, store, updateView);
            };

            getInfo().then(() => {
                store["sendStatus"] = "SENT";
                setTimeout(() => {
                    newMessage["time"] = fetchTimeValue();
                    fmc.addMessage(newMessage);
                }, Math.floor(Math.random() * 10000) + 10000);
                labelTimeout = setTimeout(() => {
                    store["sendStatus"] = "";
                    updateView();
                }, 3000);
            });
        };

        fmc.onRightInput[4] = async () => {
            store["sendStatus"] = "SENDING";
            updateView();
            const icaos = [store["origin"], store["destination"], store["alternate"], store["airport"]];
            const lines = [];
            const newMessage = { "id": Date.now(), "type": reqTypes[store.reqID], "time": '00:00', "opened": null, "content": lines, };
            fmc.clearUserInput();

            const getInfo = async () => {
                getTAF(icaos, lines, store, updateView);
            };

            getInfo().then(() => {
                store["sendStatus"] = "SENT";
                setTimeout(() => {
                    newMessage["time"] = fetchTimeValue();
                    fmc.addMessage(newMessage);
                }, Math.floor(Math.random() * 10000) + 10000);
                labelTimeout = setTimeout(() => {
                    store["sendStatus"] = "";
                    updateView();
                }, 3000);
            });
        };
    }
}