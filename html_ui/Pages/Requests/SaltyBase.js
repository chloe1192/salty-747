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

const getSimBriefPlan = (fmc, store, updateView) => {
    const simBriefUsername = SaltyDataStore.get("OPTIONS_SIMBRIEF_USERNAME", "");

    if (!simBriefUsername) {
        fmc.showErrorMessage("NO COMPANY LOGON");
        throw ("No simbrief username provided");
    }
    setTimeout(() => {
        store.uplinkCell = "SENT\xa0";
        updateView();
    }, fmc.getDelayDownlink());

    return CompanyRequestsApi.getSimBriefPlan(simBriefUsername)
        .then(data => {            
            setTimeout(() => {
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
                fmc.simbrief["route_distance"] = data.general.route_distance;
                store.uplinkCell = store.uplinkReturn;
                fmc.showErrorMessage("UPLINK RECEIVED");
                insertUplink(fmc, updateView);
                updateView();     
                return fmc.simbrief;
            },  fmc.getDelayUplink());
        })
        .catch(_err => {
            console.log(_err.message);
            store.uplinkCell = "UPLINK*";
        });
};

const insertUplink = (fmc, updateView) => {
    const {
        originIcao,
        destinationIcao,
        cruiseAltitude,
        costIndex,
        alternateIcao,
        avgTropopause,
        icao_airline,
        flight_number
    } = fmc.simbrief;

    const fromTo = `${originIcao}${destinationIcao}`;
    const fltNbr = `${icao_airline}${flight_number}`;
    const perfDataUplink = "PERF DATA UPLINK";

    console.log(fltNbr);
    fmc.updateFlightNo(fltNbr, () => {
        if (result) {
            fmc.showErrorMessage("FLT NO UPDATED");
        }
    });
    console.log(fromTo);
    fmc.updateCoRoute(fromTo, (result) => {
        if (result) {
            fmc.showErrorMessage("CO ROUTE UPDATED");
            FMCRoutePage.ShowPage1(fmc);
        }
    });
};

const getMETAR = async (icaos, lines, store, updateView) => {
    const storedMetarSrc = SaltyDataStore.get("CONFIG_METAR_SRC", "MSFS");
    for (const icao of icaos) {
        if (icao !== "") {
            await CompanyRequestsApi.getMetar(icao, srcMap[storedMetarSrc])
                .then((data) => {
                    lines.push(`METAR ${icao}[color]blue`);
                    const newLines = wordWrapToStringList(data.metar, 25);
                    newLines.forEach(l => lines.push(l.concat("[color]green")));
                    lines.push(msgSep);
                })
                .catch(() => {
                    lines.push(`METAR ${icao}[color]blue`);
                    lines.push('STATION NOT AVAILABLE[color]red');
                    lines.push(msgSep);
                });
        }
    }
    store["sendStatus"] = "SENT";
    updateView();
};

const getTAF = async (icaos, lines, store, updateView) => {
    const storedTafSrc = SaltyDataStore.get("CONFIG_TAF_SRC", "NOAA");
    for (const icao of icaos) {
        if (icao !== "") {
            await CompanyRequestsApi.getTaf(icao, srcMap[storedTafSrc])
                .then((data) => {
                    lines.push(`TAF ${icao}[color]blue`);
                    const newLines = wordWrapToStringList(data.taf, 25);
                    newLines.forEach(l => lines.push(l.concat("[color]green")));
                    lines.push(msgSep);
                })
                .catch(() => {
                    lines.push(`TAF ${icao}[color]blue`);
                    lines.push('STATION NOT AVAILABLE[color]red');
                    lines.push(msgSep);
                });
        }
    }
    store["sendStatus"] = "SENT";
    updateView();
};