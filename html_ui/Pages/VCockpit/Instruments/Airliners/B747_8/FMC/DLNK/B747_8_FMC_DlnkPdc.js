class FMCDlnkPdc {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["PDC REQUEST"],
            ["\xa0FLT NO", "DEPT\xa0"],
            [fltNum, utcDate],
            ["\xa0ATIS", "STAND\xa0"],
            [origSta, destSta],
            ["\xa0A/C TYPE", "DEST\xa0"],
            [edtUtc, ete],
            ["\xa0FREE TEXT"],
            ["<"],
            ["---------", "TO ATS UNIT\xa0"],
            ["", "____"],
            ["\xa0RETURN TO", ""],
            ["<DLNK MENU", "SEND>"]
        ]);
    }
}