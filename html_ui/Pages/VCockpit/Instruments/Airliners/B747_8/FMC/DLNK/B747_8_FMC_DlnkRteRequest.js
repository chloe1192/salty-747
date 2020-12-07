class FMCDlnkRteRequest {
    static ShowPage(fmc, store = {"routeName": "----------", "fltNo": "------", "origin": "----", "destination": "----", "routeDist": "---NM"}) {
        fmc.clearDisplay();
        fmc.setTemplate([
            [`${store.routeName}.RTE`],
            ["\xa0FLT NO"],
            [`${store.fltNo}`, `${store.routeDist}NM`],
            ["\xa0ORIGIN"],
            [`${store.origin}`],
            ["\xa0DEST"],
            [`${store.destination}`],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["<RETURN", "REQUEST>"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCRoutePage.ShowPage1(fmc);
        }

        fmc.onRightInput[5] = () => {
            fmc.setRouteRequested(store.origin, store.destination, store.fltNo, store.routeName);
        }
    }
}