class FMCDlnkWtBal {
    static ShowPage(fmc) {
        fmc.clearDisplay();

        let fob = fmc.getFOB();
        let fobCell = "--.-";
        let weights = fmc.getWeights();

        if (fob) {
            fobCell = fmc.formatWeight(fob);
        }

        fmc.setTemplate([
            ["WT BAL PAGE"],
            ["\xa0FOB", "PAYLOAD\xa0"],
            [fobCell, ],
            [],
            ["", ""],
            [],
            ["", ""],
            [],
            ["", ""],
            [],
            ["", ""],
            ["\xa0RETURN TO"],
            ["<DLNK MENU"]
        ]);        
        
        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }
    }
}