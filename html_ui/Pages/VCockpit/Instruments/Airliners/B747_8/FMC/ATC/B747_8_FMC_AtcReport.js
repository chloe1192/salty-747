class FMCAtcReport {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["POS REPORT"],
            ["\xa0LAST", "ATA\xa0"],
            ["-----", "----Z"],
            ["\xa0ALT", "GND SPD\xa0"],
            ["FL", "000KT"],
            ["\xa0TO", "ETA\xa0"],
            ["-----", "----Z"],
            ["\xa0NEXT", "DEST ETA\xa0"],
            ["-----", "----Z"],
            ["\xa0TEMP", "FUEL", "WIND\xa0"],
            ["--- C", "---.-", "---/---KT"],
            ["\xa0COMPANY", "ATC\xa0"],
            ["<SEND", "NO ATC COMM"]
        ]);

        fmc.onLeftInput[0] = () => {
            FMCDlnkPreflight.ShowPage1(fmc);
        };
    }
}