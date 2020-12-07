class CompanyRequests {
    constructor () {
        this.fltNo;
        this.origin;
        this.destination;
        this.etdUtc;
        this.ete;
        this.airlineId;
        this.atcFltId;
    }

    connect(
        fltNo,
        origin,
        destination,
        etdUtc,
        ete,
        airlineId,
        atcFltId
    ) {
        this.fltNo = fltNo;
        this.origin = origin;
        this.destination = destination;
        this.etdUtc = etdUtc;
        this.ete = ete;
        this.airlineId = airlineId;
        this.atcFltId = atcFltId;
        return true
            .catch((err) => {
                return err;
            });
    }

    static requestLoadsheet(payload, fmc) {
        const loadsheetMsg = fmc.setTemplate(
            [
                ["ACARS BEGIN 2020/12/6 (12:10:10)", "1", "2"],
                [""],
                ["LOADSHEET"],
                ["/"],
                ["LOADSHEET FINAL 1210Z EDNO1"],
                ["D-ABYT B747-8 SBGR"],
                ["DOW 42000"],
                ["OEW 43000"],
                ["TOW 77000 MAX 77000"],
                ["LW 62500 MAX 62500"],
                ["ZFW 60500"],
                ["------", "------", "CONTINUED"],
                [""]
            ],
            [
                ["ACARS CONTINUE", "2", "2"],
                [""],
                ["PAX"],
                ["1/32 2/8 3/40 4/100 5/100"],
                ["CARGO"],
                ["1/2500 2/3500"],
                ["LIZFW 22.3 LITOW 22.5 LILAW 20.5"],
                ["MACZFW 22.3 MACTOW 22.5 MACLAW 20.5"],
                ["NOTOC: NO"],
                [""],
                ["LAST MINUTE CHANGES"],
                ["NONE"],
                ["LOADSHEET END"]
            ],
        );  
        return loadsheetMsg;
    }
}