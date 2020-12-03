class FMCDlnkPreflight {
    static ShowPage1(fmc) {
        fmc.clearDisplay();

        const username =  SaltyDataStore.get("OPTIONS_SIMBRIEF_USERNAME", "");
        let fltNum = fmc.simbrief.flight_number;
        const utcDate = "[00:00Z]";
        let origSta = fmc.simbrief.originIcao;
        let destSta = fmc.simbrief.destinationIcao;
        let edtUtc = fmc.simbrief.outTime;
        let ete = fmc.simbrief.ete;
        let airlineId = "LH";
        let atcFltId = fmc.simbrief.flight_number;
        let fob = fmc.simbrief.tripFuel;

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
            ["", "INIT DATA"],
            ["<ACARS MENU", "UPLINK*"]
        ]);        

        fmc.onRightInput[5] = () => {
            if (fmc.flightPlanManager.getOrigin() && fmc.flightPlanManager.getOrigin()) {
                fmc.simbrief = SimBriefApi.getSimBriefPlan(username);
                FMCDlnkPreflight.ShowPage1(fmc);
            }
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