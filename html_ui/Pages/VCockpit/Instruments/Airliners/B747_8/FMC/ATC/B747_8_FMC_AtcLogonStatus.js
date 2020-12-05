class FMCAtcLogonSatus {
    static ShowPage(fmc, store = {"canSend": ""}) {
        fmc.clearDisplay();
        
        let logonTo = "____";
        let fltNo = "______";
        let sendLabel = "";
        /*let sendCell = "";*/
        let adsLabel;
        let adsCell;
        let adsStatus = 0;
        let adsEmergLabel;
        let adsEmergCell;
        let adsEmergStatus = 0; 
        let dlnkStatus = "NO COMM";

        if (fmc.atc.isLogged) {
            logonTo = fmc.atc.logonAts;
            sendLabel = "LOGON";
            dlnkStatus = "READY";
        }
        if (SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string")) {
            fltNo = SimVar.GetSimVarValue("ATC FLIGHT NUMBER", "string");
        }
        /*  ADS STATUS
            0 = ARMED
            1 = OFF
        */
        if (fmc.atc.adsStatus) {
            adsStatus = fmc.atc.adsStatus;
            switch (adsStatus) {
                case 0:
                    adsLabel = "ADS (ARM)";
                    adsCell = "<SELECT OFF";
                case 1:
                    adsLabel = "ADS (OFF)";
                    adsCell = "<SELECT ON";                    
            }
        }
        /*  ADS EMERG STATUS
            0 = OFF
            1 = ON
            2 = UNAVAIL
        */
        if (fmc.atc.adsEmergStatus) {
            adsEmergStatus = fmc.atc.adsEmergStatus;
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
                store.canSend = "SENDING"
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