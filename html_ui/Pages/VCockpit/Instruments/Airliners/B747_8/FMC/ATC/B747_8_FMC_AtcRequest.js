class FMCAtcRequest {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ATC REQUEST"],
            ["ALTITUDE"],
            [alt],
            ["SPEED"],
            ["<ATC REQUEST", "SEND PIREP>"],
            ["OFFSET"],
            ["<PERF REQUEST", "ARR REPORT>"],
            [],
            ["ROUTE REQUEST", "DIVERTING>"],
            [],
            ["<ERASE REQUEST", "MISC>"],
            ["", "", "-----------"],
            ["<REQUEST", "VERIFY>"]
        ]);

        fmc.onLeftInput[0] = () => {
            FMCDlnkPreflight.ShowPage1(fmc);
        };
    }
}