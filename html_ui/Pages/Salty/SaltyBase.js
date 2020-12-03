class SaltyBase {
    constructor() {
        this.irs = new SaltyIRS();
    }
    init() {
        this.irs.init();
    }
    update() {
        this.irs.update();
    }
}

const getSimBriefPlan = (fmc) => {
    const simBriefUsername = SaltyDataStore.get("OPTIONS_SIMBRIEF_USERNAME", "");

    if (!simBriefUsername) {
        fmc.showErrorMessage("NO SIMBRIEF USER");
        throw ("No simbrief username provided");
    }

    fmc.simbrief["sendStatus"] = "REQUESTING";

    return SimBriefApi.getSimBriefPlan(simBriefUsername)
        .then(data => {
            fmc.simbrief["route"] = data.general.route;
            fmc.simbrief["cruiseAltitude"] = data.general.initial_altitude;
            fmc.simbrief["originIcao"] = data.origin.icao_code;
            fmc.simbrief["destinationIcao"] = data.destination.icao_code;
            fmc.simbrief["blockFuel"] = data.fuel.plan_ramp;
            fmc.simbrief["payload"] = data.weights.payload;
            fmc.simbrief["estZfw"] = data.weights.est_zfw;
            fmc.simbrief["costIndex"] = data.general.costindex;
            fmc.simbrief["navlog"] = data.navlog.fix;
            fmc.simbrief["icao_airline"] = typeof data.general.icao_airline === 'string' ? data.general.icao_airline : "";
            fmc.simbrief["flight_number"] = data.general.flight_number;
            fmc.simbrief["alternateIcao"] = data.alternate.icao_code;
            fmc.simbrief["avgTropopause"] = data.general.avg_tropopause;
            fmc.simbrief["ete"] = data.times.est_time_enroute;
            fmc.simbrief["blockTime"] = data.times.est_block;
            fmc.simbrief["outTime"] = data.times.est_out;
            fmc.simbrief["onTime"] = data.times.est_on;
            fmc.simbrief["inTime"] = data.times.est_in;
            fmc.simbrief["offTime"] = data.times.est_off;
            fmc.simbrief["taxiFuel"] = data.fuel.taxi;
            fmc.simbrief["tripFuel"] = data.fuel.enroute_burn;
            fmc.simbrief["sendStatus"] = "DONE";

            updateView();

            return fmc.simbrief;
        })
        .catch(_err => {
            console.log(_err.message);

            fmc.simbrief["sendStatus"] = "READY";
        });
};