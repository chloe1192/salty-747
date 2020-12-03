function formatWeight(value) {
    return (value).toFixed(1);
}
class FMCDlnkPreflight {
    static ShowPage1(fmc) {
        fmc.clearDisplay();

        const weightUnits = SaltyDataStore.get("OPTIONS_WEIGHT_UNITS", "");
        const username =  SaltyDataStore.get("OPTIONS_SIMBRIEF_USERNAME", "");
        let fltNum = "____";
        const seconds = Math.floor(SimVar.GetGlobalVarValue("ZULU TIME", "seconds"));        
        const utcDate = FMCMainDisplay.secondsTohhmm(seconds);
        let origSta = "____";
        let destSta = "____";
        let edtUtc = "[--:--Z]";
        let ete = "[--:--Z]";
        let airlineId = "LH";
        let atcFltId = "DLH260";
        let fob = "--.-";
        let currentFob;
        let uplinkLabel = "INIT DATA";
        let uplinkText = "UPLINK*";
        
        if (!fmc.flightPlanManager.getOrigin() || !fmc.flightPlanManager.getOrigin()) {
            uplinkLabel = "INIT DATA[color]red";
            uplinkText = "UPLINK\xa0[color]red";
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
        if (weightUnits == "lbs") {
            currentFob = formatWeight(fmc.getFOB(true));
            if (currentFob) {
                fob = `${currentFob}`;
            }
        } else {
            currentFob = formatWeight(fmc.getFOB());
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
            ["<ACARS MENU", uplinkText]
        ]);        

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
            ["", "INIT DATA"],
            ["<ACARS MENU", "PREFLT*"]
        ]);
    }
}