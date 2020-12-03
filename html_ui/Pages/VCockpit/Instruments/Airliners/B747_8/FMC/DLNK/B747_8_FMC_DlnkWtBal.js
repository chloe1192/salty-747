class FMCDlnkWtBal {
    static ShowPage(fmc) {
        fmc.clearDisplay();

        let fob = fmc.getFOB();
        let fobCell = "--.-";
        if (fob) {
            fobCell = fob;
        }

        fmc.setTemplate([
            ["WT BAL PAGE"],
            [fobCell, ""],
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
            [""]
        ]);
    }
}