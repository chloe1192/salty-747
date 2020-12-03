class FMCAtcLogonSatus {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ATC LOGON/STATUS"],
            ["\xa0LOGON TO"],
            ["____"],
            ["\xa0FLT NO"],
            ["______"],
            [],
            [],
            [],
            [],
            ["\xa0ADS (ARM)", "ADS EMERG"],
            ["<ADS", "MISC>"],
            ["__FMCSEPARATOR", "DATALINK"],
            ["", "NO COMM"]
        ]);

        fmc.onLeftInput[0] = () => {
            FMCDlnkPreflight.ShowPage1(fmc);
        };
    }
}