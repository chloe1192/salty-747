class FMCAtcReport {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ATC REPORT"],
            ["\xa0ATC"],
            ["<RTE REPORT", "FREE TEXT>"],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["<INDEX"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCAtcMenu.ShowPage(fmc);
        };
    }
}