class FMCDlnkLoadsheet {
    static ShowPage(fmc) {
        fmc.clearDisplay();

        let loadsheetMsg;
        let payload = "";

        fmc.setTemplate([
            ["REQUEST LOADSHEET"],
            ["FLT NUM", "COMPANY"],
            [fmc.acars.fltNo, fmc.acars.arilineId],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["<ACARS MENU", "REQUEST>"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage2(fmc);
        }

        fmc.onRightInput[5] = () => {
            loadsheetMsg = CompanyRequests.requestLoadsheet(payload, fmc);
            console.log(loadsheetMsg);
        }
    }
}