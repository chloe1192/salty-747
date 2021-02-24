class FMC_COMM_Release {
    static ShowPage(fmc) {
        fmc.activeSystem = "DLNK";
        fmc.clearDisplay();
        let upperDeck = SimVar.GetSimVarValue("PAYLOAD STATION WEIGHT:3", "kg");
        let firstClass = SimVar.GetSimVarValue("PAYLOAD STATION WEIGHT:4", "kg");
        let businessClass = SimVar.GetSimVarValue("PAYLOAD STATION WEIGHT:5", "kg");
        let premiumEco = SimVar.GetSimVarValue("PAYLOAD STATION WEIGHT:6", "kg");
        let fwdEcoClass = SimVar.GetSimVarValue("PAYLOAD STATION WEIGHT:7", "kg");
        let rwdEcoClass = SimVar.GetSimVarValue("PAYLOAD STATION WEIGHT:8", "kg");
        fmc.setTemplate([
            ["ACARS RELEASE"],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["UPPER", "FIRST"],
            [upperDeck.toFixed(0) + "/4576", firstClass.toFixed(0) + "/718"],
            ["BUSINESS", "PREMIUM"],
            [businessClass.toFixed(0) + "/7072", premiumEco.toFixed(0) + "/3744"],
            ["FWD ECO", "RWD ECO"],
            [fwdEcoClass.toFixed(0) + "/6864", rwdEcoClass.toFixed(0) + "/14768"],
            ["\xa0ACARS", "DATA LINK"],
            ["<REQUESTS", "READY"]
        ]);

        fmc.onPrevPage = () => {
            FMC_COMM_Release.ShowPage2(fmc);
        };

        fmc.onNextPage = () => {
            FMC_COMM_Release.ShowPage2(fmc);
        };
        
        /* Sets pax weight */
        fmc.onLeftInput[2] = () => {
            let value = fmc.inOut;
            SimVar.SetSimVarValue("PAYLOAD STATION WEIGHT:3", "kg", value);
            FMC_COMM_Release.ShowPage(fmc);
        }
        
        /* Sets pax weight */
        fmc.onRightInput[2] = () => {
            let value = fmc.inOut;
            SimVar.SetSimVarValue("PAYLOAD STATION WEIGHT:4", "kg", value);
            FMC_COMM_Release.ShowPage(fmc);
        }
        
        /* Sets pax weight */
        fmc.onLeftInput[3] = () => {
            let value = fmc.inOut;
            SimVar.SetSimVarValue("PAYLOAD STATION WEIGHT:5", "kg", value);
            FMC_COMM_Release.ShowPage(fmc);
        }
        
        /* Sets pax weight */
        fmc.onLeftInput[3] = () => {
            let value = fmc.inOut;
            SimVar.SetSimVarValue("PAYLOAD STATION WEIGHT:6", "kg", value);
            FMC_COMM_Release.ShowPage(fmc);
        }
        
        /* Sets pax weight */
        fmc.onLeftInput[4] = () => {
            let value = fmc.inOut;
            SimVar.SetSimVarValue("PAYLOAD STATION WEIGHT:7", "kg", value);
            FMC_COMM_Release.ShowPage(fmc);
        }
        
        /* Sets pax weight */
        fmc.onLeftInput[4] = () => {
            let value = fmc.inOut;
            SimVar.SetSimVarValue("PAYLOAD STATION WEIGHT:8", "kg", value);
            FMC_COMM_Release.ShowPage(fmc);
        }
        
        fmc.onLeftInput[5] = () => {
            FMC_COMM_Requests.ShowPage(fmc);
        }

    }
    static ShowPage2(fmc) {
        fmc.activeSystem = "DLNK";
        fmc.clearDisplay();
        let tankMain1 = SimVar.GetSimVarValue("FUEL TANK LEFT AUX QUANTITY", "liters");
        let tankMain2 = SimVar.GetSimVarValue("FUEL TANK LEFT MAIN QUANTITY", "liters");
        let tankMain3 = SimVar.GetSimVarValue("FUEL TANK RIGHT MAIN QUANTITY", "liters");
        let tankMain4 = SimVar.GetSimVarValue("FUEL TANK RIGHT AUX QUANTITY", "liters");
        let tankCenter = SimVar.GetSimVarValue("FUEL TANK CENTER QUANTITY", "liters");
        let tankRes1 = SimVar.GetSimVarValue("FUEL TANK LEFT TIP QUANTITY", "liters");
        let tankRes2 = SimVar.GetSimVarValue("FUEL TANK RIGHT TIP QUANTITY", "liters");
        let tankStab = SimVar.GetSimVarValue("FUEL TANK CENTER2 QUANTITY", "liters");
        const updateView = () => {
            fmc.setTemplate([
                ["ACARS RELEASE"],
                ["MAIN 1", "MAIN 4"],
                [tankMain1.toFixed(0), tankMain4.toFixed(0)],
                ["MAIN 2", "MAIN 3"],
                [tankMain2.toFixed(0), tankMain3.toFixed(0)],
                ["CENTER", ""],
                [tankCenter.toFixed(0), ""],
                ["RES 1", "RES 2"],
                [tankRes1.toFixed(0), tankRes2.toFixed(0)],
                ["STAB", ""],
                [tankStab.toFixed(0)],
                ["\xa0ACARS", "DATA LINK"],
                ["<REQUESTS", "READY"]
            ]);
        }
        updateView();

        fmc.onPrevPage = () => {
            FMC_COMM_Release.ShowPage(fmc);
        };

        fmc.onNextPage = () => {
            FMC_COMM_Release.ShowPage(fmc);
        };
        
        /* Sets tank fuel */
        fmc.onLeftInput[0] = () => {
            let value = fmc.inOut;
            loadFuel("FUEL TANK LEFT AUX QUANTITY", value);
            fmc.clearUserInput();
        }
        
        /* Sets tank fuel */
        fmc.onRightInput[0] = () => {
            let value = fmc.inOut;
            loadFuel("FUEL TANK RIGHT AUX QUANTITY", value);
            fmc.clearUserInput();
        }
        
        /* Sets tank fuel */
        fmc.onLeftInput[1] = () => {
            let value = fmc.inOut;
            loadFuel("FUEL TANK LEFT MAIN QUANTITY", value);
            fmc.clearUserInput();
        }
        
        /* Sets tank fuel */
        fmc.onRightInput[1] = () => {
            let value = fmc.inOut;
            loadFuel("FUEL TANK RIGHT MAIN QUANTITY", value);
            fmc.clearUserInput();
        }

        
        fmc.onLeftInput[5] = () => {
            FMC_COMM_Requests.ShowPage(fmc);
        }
    }
}

async function loadFuel(tank, qty) {
    await SimVar.SetSimVarValue(tank, "Gallons", qty);
    updateView();
}