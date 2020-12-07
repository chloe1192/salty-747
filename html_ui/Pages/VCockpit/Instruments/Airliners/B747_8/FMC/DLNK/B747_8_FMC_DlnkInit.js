class FMCDlnkInit {
    static ShowPage1(fmc, store = {"initCell": "PREFLT*\xa0\xa0"}) {
        fmc.clearDisplay();

        let fltNoCell = "□□□□";        
        const utcDate = (fmc.getUTCDay() + "").padStart(2, "0");
        let originCell = "□□□□";
        let destinationCell = "□□□□";
        let edtUtcCell = "--:--";
        let eteCell = "--:--";
        let airlineIdCell = "\xa0";
        let atcFltIdCell = "□□□□□□";
        let fob = "--.-";
        let currentFob;
        let cnxSyncAvail = false;
        
        if (SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string")) {
            fmc.acars.fltNo = SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string");
            fmc.acars.fltNo = fmc.acars.fltNo.slice(3);
            fmc.acars.fltNo = (fmc.acars.fltNo+"").padStart(4, "0");
            fmc.acars.atcFltId = SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string");
        }
        if (fmc.acars.fltNo) {
            fltNoCell = fmc.acars.fltNo;
        }
        if (fmc.acars.origin) {
            originCell = fmc.acars.origin;
        }
        if (fmc.acars.destination) {
            destinationCell = fmc.acars.destination;
        }
        if (fmc.acars.etdUtc != "") {
            edtUtcCell = fmc.acars.etdUtc;
            edtUtcCell = edtUtcCell.split("");
            edtUtcCell = edtUtcCell[0] + edtUtcCell[1] + ":" + edtUtcCell[2] + edtUtcCell[3];
        }
        if (fmc.acars.ete != "") {
            eteCell = fmc.acars.ete;
            eteCell = eteCell.split("");
            eteCell = eteCell[0] + eteCell[1] + ":" + eteCell[2] + eteCell[3];
        }
        if (fmc.acars.airlineId != "") {
            airlineIdCell = fmc.acars.airlineId;
        }
        if (fmc.acars.atcFltId != "") {
            atcFltIdCell = fmc.acars.atcFltId;
        }
        currentFob = fmc.formatWeight(fmc.getFOB(fmc.units.weight));
        fob = `${currentFob}`;

        const updateView = () => {
            if (fmc.acars.origin && fmc.acars.destination && fmc.acars.etdUtc && fmc.acars.ete && fmc.acars.airlineId && fmc.acars.atcFltId) {
                cnxSyncAvail = true;
                store.initCell = "CNX SYNC*\xa0\xa0";
            }
            fmc.setTemplate([
                ["DLNK INIT", "1", "2"],
                ["FLT NUM", "UTC DATE"],
                [`${fltNoCell}`, `[${utcDate}]`],
                ["ORIG STA", "DEST STA"],
                [`${originCell}`, `${destinationCell}`],
                ["EDT UTC", "ETE"],
                [`[${edtUtcCell}Z]`, `[${eteCell}Z]`],
                ["AIRLINE ID", "ATC FLT ID"],
                [`[${airlineIdCell}]`, `${atcFltIdCell}`],
                ["", "FOB"],
                ["", `${fob}`],
                ["", "INIT DATA"],
                ["<ACARS MENU", `${store.initCell}`]
            ]);
        }
        updateView();

        fmc.onLeftInput[1] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            fmc.updateRouteOrigin(value, (result) => {
                if (result) {
                    fmc.acars.origin = value;
                    FMCDlnkInit.ShowPage1(fmc);
                }
            });
        }

        fmc.onRightInput[1] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            fmc.updateRouteDestination(value, (result) => {
                if (result) {
                    fmc.acars.destination = value;
                    FMCDlnkInit.ShowPage1(fmc);
                }
            });
        }

        fmc.onLeftInput[2] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            fmc.acars.etdUtc = value;
            FMCDlnkInit.ShowPage1(fmc);
        }

        fmc.onRightInput[2] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            fmc.acars.ete = value;
            FMCDlnkInit.ShowPage1(fmc);
        }

        fmc.onLeftInput[3] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            fmc.acars.airlineId = value;
            FMCDlnkInit.ShowPage1(fmc);
        }

        fmc.onRightInput[3] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            fmc.updateFlightNo(value, (result) => {
                if (result) {
                    fmc.acars.fltNo = value;
                    FMCDlnkInit.ShowPage1(fmc);
                }
            });
        }

        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }

        fmc.onRightInput[5] = async () => {
            fmc.clearUserInput();
            if (cnxSyncAvail) {
                fmc.acars.cnxSyncAvail = true;
                store.initCell = "CNX SYNC\xa0\xa0\xa0";
                CompanyRequestsApi.connectCompany(fmc.acars.fltNo, fmc.acars.origin, fmc.acars.destination, fmc.acars.etdUtc, fmc.acars.ete, fmc.acars.airlineId, fmc.acars.atcFltId)
                    .then((res) => {
                        fmc.showErrorMessage("CNX SYNCED");
                        fmc.acars.cnxSync = true;
                    })
                    .catch((err) => {
                        fmc.showErrorMessage("CONNECTION FAILED");
                    });
                updateView();
            }
        };
    }
    static ShowPage2(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["DLNK INIT", "2", "2"],
            ["\xa0FLT NUM", "UTC DATE\xa0"],
            [fltNo, utcDate],
            ["\xa0ORIG STA", "DEST STA\xa0"],
            [origSta, destSta],
            ["\xa0EDT UTC", "ETE\xa0"],
            [edtUtc, ete],
            ["\xa0AIRLINE ID", "ATC FLT ID\xa0"],
            [airlineId, atcFltId],
            ["", "FOB\xa0"],
            ["", fob],
            ["\xa0RETURN TO", "INIT DATA"],
            ["<DLNK MENU", "PREFLT*"]
        ]);
        
        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }
    }
}