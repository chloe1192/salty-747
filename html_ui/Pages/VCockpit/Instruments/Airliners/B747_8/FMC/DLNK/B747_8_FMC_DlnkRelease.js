class FMCDlnkRelease {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["RELEASE"],
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