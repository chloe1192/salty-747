class FMCAtcLog {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ATC LOG"],
            [],
            [""],
            [],
            [""],
            [],
            [""],
            [],
            [""],
            [],
            [""],
            [],
            ["<INDEX", "ERASE LOG>"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCAtcMenu.ShowPage(fmc);
        };
    }
}