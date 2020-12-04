class FMCDlnkPdc {
    static ShowPage(fmc, store = {"stand": "___", "atis": "_", "freeText": "<", "atsUnit": "____"}) {
        fmc.clearDisplay();

        let fltNum;
        let fltNumCell = "____";
        let origSta;
        let origStaCell = "____";
        let destSta;
        let destStaCell = "____";
        let acType = "B748";
        let sendStatus;
        let sendCell = "SEND>";

        if (SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string")) {
            fltNum = SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string");
            fltNumCell = fltNum;
        }
        
        if (fmc.flightPlanManager.getOrigin()) {
            origSta = fmc.flightPlanManager.getOrigin().ident;
            origStaCell = origSta;
        }
        if (fmc.flightPlanManager.getDestination()) {
            destSta = fmc.flightPlanManager.getDestination().ident;
            destStaCell = destSta;
        }

        fmc.setTemplate([
            ["PDC REQUEST"],
            ["\xa0FLT NO", "DEPT\xa0"],
            [fltNumCell, origStaCell],
            ["\xa0ATIS", "STAND\xa0"],
            [store.atis, store.stand],
            ["\xa0A/C TYPE", "DEST\xa0"],
            [acType, destStaCell],
            ["\xa0FREE TEXT"],
            [store.freeText],
            ["---------", "TO ATS UNIT\xa0"],
            ["", store.atsUnit],
            ["\xa0RETURN TO", ""],
            ["<DLNK MENU", sendCell]
        ]);

        fmc.onLeftInput[1] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                store.atis = "_";
            } else {
                store.atis = value;
            }
            FMCDlnkPdc.ShowPage(fmc, store);
        };

        fmc.onLeftInput[3] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                store.freeText = "<";
            } else {
                store.freeText = value;
            }
            FMCDlnkPdc.ShowPage(fmc, store);
        };
        
        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }

        fmc.onRightInput[1] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                store.stand = "___";
            } else {
                store.stand = value;
            }
            FMCDlnkPdc.ShowPage(fmc, store);
        };

        fmc.onRightInput[4] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                store.atsUnit = "____";
            } else {
                store.atsUnit = value;
            }
            FMCDlnkPdc.ShowPage(fmc, store);
        };

        fmc.onRightInput[5] = () => {
            sendStatus = "SENDING";
            sendCell = sendStatus;
            sendStatus = "SENT";
            sendCell = sendStatus;
            FMCDlnkPdc.ShowPage(fmc);
        };
    }
}