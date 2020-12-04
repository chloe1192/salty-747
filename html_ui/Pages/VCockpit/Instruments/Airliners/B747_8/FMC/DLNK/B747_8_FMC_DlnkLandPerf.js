class FMCDlnkLandPerf {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ATIS REQUEST"],
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
    }
}