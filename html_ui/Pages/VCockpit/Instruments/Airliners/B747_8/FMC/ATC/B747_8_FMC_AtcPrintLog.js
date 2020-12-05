class FMCAtcPrintLog {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["PRINT LOG"],
            [""],
            [""],
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