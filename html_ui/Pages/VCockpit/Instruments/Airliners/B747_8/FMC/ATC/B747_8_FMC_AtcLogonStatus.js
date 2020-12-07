class FMCAtcLogonSatus {
    static ShowPage(fmc, store = {"canSend": ""}) {
        fmc.clearDisplay();
        
        let logonTo = "□□□□";
        let fltNo = "□□□□□□";
        let sendLabel = "";
        let sendCell = "";
        let adsLabel;
        let adsCell;
        let adsStatus;
        let adsEmergLabel;
        let adsEmergCell;
        let adsEmergStatus; 
        let dlnkStatus = "NO COMM";

        if (fmc.atc.isLogged || fmc.atc.logonAts != "") {
            logonTo = fmc.atc.logonAts;
            store.canSend = "SEND>";
            sendLabel = "LOGON";
            dlnkStatus = "READY";
        }
        if (fmc.atc.logonAts != "") {
        }
        if (SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string")) {
            fltNo = SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string");
        }
        /*  ADS STATUS
            0 = ARMED
            1 = OFF
        */
        adsStatus = fmc.atc.adsStatus;
        console.log(adsStatus);
        switch (adsStatus) {
            case 0:
                adsLabel = "ADS (OFF)";
                adsCell = "<SELECT ON";
            case 1:
            adsLabel = "ADS (ARM)";
            adsCell = "<SELECT OFF";          
        }
        /*  ADS EMERG STATUS
            0 = OFF
            1 = ON
            2 = UNAVAIL
        */
        adsEmergStatus = fmc.atc.adsEmergStatus;
        console.log(adsEmergStatus);
        switch (adsEmergStatus) {
            case 0:
                adsEmergLabel = "ADS EMERG";
                adsEmergCell = "<SELECT ON";
            case 1:
                adsEmergLabel = "ADS EMERG";
                adsEmergCell = "<SELECT OFF";
            case 2:
                adsEmergLabel = "";
                adsEmergCell = ""; 
        }

        fmc.setTemplate([
            ["ATC LOGON/STATUS"],
            ["\xa0LOGON TO", `${sendLabel}\xa0`],
            [logonTo, store.canSend],
            ["\xa0FLT NO"],
            [fltNo],
            [],
            [],
            [],
            [],
            [`\xa0${adsLabel}`, `${adsEmergLabel}\xa0`],
            [`${adsCell}`, `${adsEmergCell}`],
            ["__FMCSEPARATOR", "DATA LINK"],
            ["", dlnkStatus]
        ]);

        fmc.onLeftInput[0] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            fmc.atc.logonAts = value;
            store.canSend = "SEND>"
            FMCAtcLogonSatus.ShowPage(fmc);
        };

        fmc.onRightInput[0] = () => {
            if (store.canSend != "") {
                fmc.atc.isLogged = true;
                store.canSend = "SENDING";
            }
            FMCAtcLogonSatus.ShowPage(fmc);
        };

        fmc.onLeftInput[4] = () => {
            switch (adsStatus) {
                case 0:
                    adsStatus = 1;
                    adsEmergStatus = 2;
                case 1:
                    adsStatus = 0;                    
                    adsEmergStatus = 0;
            }
            FMCAtcLogonSatus.ShowPage(fmc);
        };

        fmc.onRightInput[4] = () => {
            switch (adsStatus) {
                case 0:
                    adsEmergStatus = 1;
                case 1:                
                    adsEmergStatus = 0;
            }
            FMCAtcLogonSatus.ShowPage(fmc);
        };
    }
}