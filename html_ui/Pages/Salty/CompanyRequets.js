class CompanyRequestsApi {
    static getMetar(icao, source) {
        if (!icao) {
            throw ("No ICAO provided");
        }

        return fetch(`${CompanyRequestsApi.NXurl}/metar/${icao}?source=${source}`)
            .then((response) => {
                if (!response.ok) {
                    throw (response);
                }

                return response.json();
            });
    }

    static getTaf(icao, source) {
        if (!icao) {
            throw ("No ICAO provided");
        }

        return fetch(`${CompanyRequestsApi.NXurl}/taf/${icao}?source=${source}`)
            .then((response) => {
                if (!response.ok) {
                    throw (response);
                }

                return response.json();
            });
    }

    static getAtis(icao, source) {
        if (!icao) {
            throw ("No ICAO provided");
        }

        return fetch(`${CompanyRequestsApi.NXurl}/atis/${icao}?source=${source}`)
            .then((response) => {
                if (!response.ok) {
                    throw (response);
                }

                return response.json();
            });
    }
}

class SimBriefApi {
    static getSimBriefPlan(username) {
        if (!username) {
            throw ("No SimBrief username provided");
        }

        return fetch(`${CompanyRequestsApi.SBurl}&username=${username}`)
            .then((response) => {
                if (!response.ok) {
                    throw (response);
                }

                return response.json();
            });
    }
}

CompanyRequestsApi.NXurl = "https://api.flybywiresim.com";
CompanyRequestsApi.SBurl = "http://www.simbrief.com/api/xml.fetcher.php?json=1";