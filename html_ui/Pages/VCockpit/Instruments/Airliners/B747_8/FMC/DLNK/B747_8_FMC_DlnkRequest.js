class FMCDlnkRequest {
    static ShowPage(fmc, params = {"request": "", "requestTitle": ""}) {
        fmc.clearDisplay();

        const request = params.request;
        let fltNo = "";
        let company = "";

        if (SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string")) {
            fltNo = SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string");
        }
        if (SimVar.GetSimVarValue("ATC AIRLINE", "string")) {
            company = SimVar.GetSimVarValue("ATC AIRLINE", "string");
        }

        fmc.setTemplate([
            [`DLNK ${params.requestTitle} REQUEST`],
            ["\xa0FLT NO", "COMPANY\xa0"],
            [`${fltNo}`, `${company}`],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["<DLNK MENU", "SEND>"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }
    }
}