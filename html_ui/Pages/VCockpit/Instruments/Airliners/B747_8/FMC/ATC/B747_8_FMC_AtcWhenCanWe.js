class FMCAtcWhenCanWe {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["WHEN CAN WE EXPECT"],
            ["\xa0CRZ CLB TO"],
            ["-----"],
            ["\xa0CLIMB TO"],
            ["-----", "HIGHER ALT>"],
            ["\xa0DESCEND TO TO"],
            ["-----", "LOWER ALT>"],
            ["\xa0SPEED TO"],
            ["---", "BACK ON RTE>"],
            [""],
            [""],
            ["__FMCSEPARATOR"],
            ["<INDEX", "VERIFY>"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCAtcMenu.ShowPage(fmc);
        };
    }
}