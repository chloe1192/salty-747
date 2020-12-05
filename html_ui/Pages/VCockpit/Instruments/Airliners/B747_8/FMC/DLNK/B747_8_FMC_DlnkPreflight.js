class FMCDlnkPreflight {
    static ShowPage1(fmc) {
        fmc.clearDisplay();

        let fltNum = "____";
        const seconds = Math.floor(SimVar.GetGlobalVarValue("ZULU TIME", "seconds"));        
        const utcDate = FMCMainDisplay.secondsTohhmm(seconds);
        let origSta = "____";
        let destSta = "____";
        let edtUtc = "[--:--Z]";
        let ete = "[--:--Z]";
        let airlineId = "LH";
        let atcFltId = "____";
        let fob = "--.-";
        let currentFob;
        let uplinkLabel = "INIT DATA";
        let uplinkText = "UPLINK*";
        
        if (!fmc.flightPlanManager.getOrigin() || !fmc.flightPlanManager.getOrigin()) {
            uplinkLabel = "INIT DATA[color]inop";
            uplinkText = "UPLINK\xa0[color]inop";
        }        

        if (SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string")) {
            atcFltId = SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string");
        }
        if (fmc.simbrief.originIcao) {
            origSta = `${fmc.simbrief.originIcao}`;
        }
        if (fmc.simbrief.destinationIcao) {
            destSta = `${fmc.simbrief.destinationIcao}`;
        }
        if (fmc.simbrief.icao_airline || fmc.simbrief.flight_number) {
            fltNum = `${fmc.simbrief.icao_airline}${fmc.simbrief.flight_number}`;
        }
        if (fmc.simbrief.ete) {
            ete = `[${(fmc.simbrief.ete)}Z]`;
        }
        if(BaseAirliners.unitIsMetric(Aircraft.B747_8)) {
            currentFob = fmc.formatWeight(fmc.getFOB());
            if (currentFob) {
                fob = `${currentFob}`;
            }
        } else {
            currentFob = formatWeight(fmc.getFOB(true));
            if (currentFob) {
                fob = `${currentFob}`;
            }
        }

        fmc.setTemplate([
            ["DLNK INIT 1/2"],
            ["FLT NUM", "UTC DATE"],
            [fltNum, utcDate],
            ["ORIG STA", "DEST STA"],
            [origSta, destSta],
            ["EDT UTC", "ETE"],
            [edtUtc, ete],
            ["AIRLINE ID", "ATC FLT ID"],
            [airlineId, atcFltId],
            ["", "FOB"],
            ["", fob],
            ["", uplinkLabel],
            ["<DLNK MENU", uplinkText]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }

        fmc.onRightInput[5] = () => {
            /*if (fmc.flightPlanManager.getOrigin() && fmc.flightPlanManager.getOrigin()) {*/
                getSimBriefPlan(fmc);
                console.log(fmc.simbrief["originIcao"]);
                FMCDlnkPreflight.ShowPage1(fmc);
            /*}*/
        };
    }
    static ShowPage2(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["DLNK INIT 2/2"],
            ["\xa0FLT NUM", "UTC DATE\xa0"],
            [fltNum, utcDate],
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