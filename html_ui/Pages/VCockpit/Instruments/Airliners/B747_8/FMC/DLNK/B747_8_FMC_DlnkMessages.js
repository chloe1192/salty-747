class FMCDlnkPerfMessages {
    static ShowPage(fmc) {
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
}