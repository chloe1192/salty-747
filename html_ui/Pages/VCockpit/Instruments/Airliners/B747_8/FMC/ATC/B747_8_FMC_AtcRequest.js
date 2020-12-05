class FMCAtcRequest {
    static ShowPage(fmc) {
        fmc.clearDisplay();

        let alt = "-----";
        let speed = "---";
        let offset = "---";

        fmc.setTemplate([
            ["ATC REQUEST"],
            ["\xa0ALTITUDE"],
            [alt],
            ["\xa0SPEED"],
            [speed],
            ["\xa0OFFSET"],
            [offset],
            [""],
            ["<ROUTE REQUEST"],
            [""],
            ["<ERASE REQUEST"],
            ["__FMCSEPARATOR"],
            ["<INDEX", "VERIFY>"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCAtcMenu.ShowPage(fmc);
        };
    }
}