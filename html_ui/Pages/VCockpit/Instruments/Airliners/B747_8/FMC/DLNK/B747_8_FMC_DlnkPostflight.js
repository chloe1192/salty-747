class FMCDlnkPostflight {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["DLNK INIT 1/2"],
            ["FLT NUM", "UTC DATE"],
            [fltNum, utcDate],
            ["ORIG STA", "DEST STA"],
            [origSta, destSta],
            ["EDT UTC", "ETE"],
            [edtUtc, ete],
            ["AIRLINE ID", "ATC FLT ID"],
            [airlineId, atcFltId],
            ["", "FOB"],
            ["", fob],
            ["", "INIT DATA"],
            ["<ACARS MENU", "PREFLT*"]
        ]);
    }
    static ShowPage2(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["DLNK INIT 2/2"],
            ["FLT NUM", "UTC DATE"],
            [fltNum, utcDate],
            ["ORIG STA", "DEST STA"],
            [origSta, destSta],
            ["EDT UTC", "ETE"],
            [edtUtc, ete],
            ["AIRLINE ID", "ATC FLT ID"],
            [airlineId, atcFltId],
            ["", "FOB"],
            ["", fob],
            ["", "INIT DATA"],
            ["<ACARS MENU", "PREFLT*"]
        ]);
    }
}