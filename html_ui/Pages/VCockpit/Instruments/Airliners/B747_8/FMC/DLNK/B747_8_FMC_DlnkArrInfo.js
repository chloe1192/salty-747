class FMCDlnkArrInfo {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["DLNK ARR INFO REQUEST"],
            [""],
            ["*CALL RAMP", "CALL CATERING*"],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["<DLNK MENU"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage2(fmc);
        }
    }
}