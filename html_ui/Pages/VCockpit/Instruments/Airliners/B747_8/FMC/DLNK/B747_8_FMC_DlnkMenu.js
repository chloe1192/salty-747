class FMCDlnkMenu {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ACARS MAIN MENU"],
            [],
            ["<PREFLIGHT", "WX INFO>"],
            [],
            ["<PDC", "SEND PIREP>"],
            [],
            ["<PERF REQUEST", "ARR REPORT>"],
            [],
            ["<WT BAL", "DIVERTING>"],
            [],
            ["<OOOI STATUS", "MISC>"],
            [],
            ["<FLT LOG", "MESSAGES>"]
        ]);

        fmc.onLeftInput[0] = () => {
            FMCDlnkPreflight.ShowPage1(fmc);
        };

        fmc.onLeftInput[1] = () => {
            FMCDlnkPdc.ShowPage(fmc);
        };

        fmc.onLeftInput[2] = () => {
            FMCDlnkPerfRequest.ShowPage(fmc);
        };

        fmc.onLeftInput[3] = () => {
            FMCDlnkWtBal.ShowPage(fmc)
        };

        fmc.onLeftInput[4] = () => {
            FMCDlnkOooi.ShowPage(fmc)
        };

        fmc.onLeftInput[5] = () => {
            FMCDlnkFltLog.ShowPage(fmc)
        };
    }
}