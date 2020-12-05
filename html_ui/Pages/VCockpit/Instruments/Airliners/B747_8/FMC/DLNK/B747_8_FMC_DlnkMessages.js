class FMCDlnkMessages {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["MESSAGES"],
            [],
            ["", "", "NO MESSAGES"],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            ["\xa0RETURN TO"],
            ["<DLNK MENU"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }
    }
}