class FMCDlnkPreflight {
    static ShowPage(fmc, store = {"initCell": "PREFLT*\xa0\xa0"}) {
        fmc.clearDisplay();

        fmc.activeSystem = "DLNK";

        fmc.setTemplate([
            ["ACARS PREFLIGHT"],
            [],
            ["<INITIALISE", "WX INFO>"],
            [],
            ["<PDC", "ARR REPORT>"],
            [],
            ["<PERF REQUEST", "MISC>"],
            [],
            ["<WT/BAL", ""],
            [],
            ["", ""],
            [],
            ["<RETURN", ""]
        ]);

        fmc.onLeftInput[0] = () => {
            FMCDlnkInit.ShowPage1(fmc);
        };

        fmc.onRightInput[0] = () => {
            FMCDlnkWeather.ShowPage(fmc);
        };

        fmc.onLeftInput[1] = () => {
            FMCDlnkPdc.ShowPage(fmc);
        };

        fmc.onRightInput[1] = () => {
            FMCDlnkArrInfo.ShowPage(fmc);
        };

        fmc.onLeftInput[2] = () => {
            FMCDlnkPerfRequest.ShowPage(fmc);
        };

        fmc.onRightInput[2] = () => {
            FMCDlnkMisc.ShowPage(fmc);
        };

        fmc.onLeftInput[3] = () => {
            FMCDlnkWtBal.ShowPage1(fmc)
        };

        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc)
        };
    }
}