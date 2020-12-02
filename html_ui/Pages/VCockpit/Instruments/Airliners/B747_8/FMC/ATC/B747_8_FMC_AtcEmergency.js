class FMCAtcEmergency {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ACARS MAIN MENU"],
            [],
            ["<PREFLIGHT", "WX INFO>"],
            [],
            ["<ATC REQUEST", "SEND PIREP>"],
            [],
            ["<PERF REQUEST", "ARR REPORT>"],
            [],
            ["<WT/BAL", "DIVERTING>"],
            [],
            ["<OOOI STATUS", "MISC>"],
            [],
            ["<FLT LOG", "MESSAGES>"]
        ]);

        fmc.onLeftInput[0] = () => {
            FMCDlnkPreflight.ShowPage1(fmc);
        };
    }
}