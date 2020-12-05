class FMCAtcClearance {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["VERIFY REQUEST"],
            [],
            ["REQUEST CLEARANCE"],
            ["/FREE TEXT"],
            ["<"],
            [""],
            ["<"],
            [""],
            ["<"],
            ["", "REQUEST\xa0"],
            ["", "SEND>"],
            [""],
            ["<INDEX"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCAtcMenu.ShowPage(fmc);
        };
    }
}