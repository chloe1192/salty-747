class FMCOptionsMenu {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        
        const simbriefUsername = SaltyDataStore.get("OPTIONS_SIMBRIEF_USERNAME", "");
        const simbriefUsernameCell = simbriefUsername != "" ? simbriefUsername : "[ ]";
        const companyName = SimVar.GetSimVarValue("ATC AIRLINE", "string");
        const weightUnits = SaltyDataStore.get("OPTIONS_WEIGHT_UNITS", "");
        const weightUnitsCell = weightUnits != "" ? weightUnits : "";
        const tempUnits = SaltyDataStore.get("OPTIONS_TEMP_UNITS", "");
        const tempUnitsCell = tempUnits != "" ? tempUnits : "";
        const paxWeight = SaltyDataStore.get("OPTIONS_PAX_WEIGHT", "");
        const paxWeightCell = paxWeight != "" ? paxWeight : "";
        const bagWeight = SaltyDataStore.get("OPTIONS_BAG_WEIGHT", "");
        const bagWeightCell = bagWeight != "" ? bagWeight : "";
        const acftRegistration = SimVar.GetSimVarValue("ATC ID", "string");
        const selCal = "DS-LM";

        fmc.setTemplate([
            ["COMPANY OPTIONS"],
            ["SIMBRIEF USER","COMPANY ICAO"],
            [`${simbriefUsernameCell}[color]green`, companyName],
            ["WEIGHT UNITS", "TEMP UNITS"],
            [weightUnitsCell, tempUnitsCell],
            ["REG", "SELCAL"],
            [acftRegistration, selCal],
            ["PAX WEIGHT", "BAG WEIGHT"],
            [paxWeightCell, bagWeightCell],
            [],
            [],
            [],
            []
        ]);

        fmc.onNextPage = () => {
            FMCOptionsMenu.ShowPage2(fmc);
        }

        fmc.onLeftInput[0] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_SIMBRIEF_USERNAME", "");
            } else {
                SaltyDataStore.set("OPTIONS_SIMBRIEF_USERNAME", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onLeftInput[1] = () => {
            if (weightUnits == "lbs") {
                SaltyDataStore.set("OPTIONS_WEIGHT_UNITS", "kg");
            } else {
                SaltyDataStore.set("OPTIONS_WEIGHT_UNITS", "lbs");
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onLeftInput[3] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_PAX_WEIGHT", "175");
            } else {
                SaltyDataStore.set("OPTIONS_PAX_WEIGHT", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onRightInput[1] = () => {
            if (tempUnits == "fahrenheit") {
                SaltyDataStore.set("OPTIONS_TEMP_UNITS", "celsius");
            } else if (tempUnits == "celsius") {
                SaltyDataStore.set("OPTIONS_TEMP_UNITS", "fahrenheit");
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onRightInput[3] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_BAG_WEIGHT", "55");
            } else {
                SaltyDataStore.set("OPTIONS_BAG_WEIGHT", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };
    }

    static ShowPage2(fmc) {   
        fmc.clearDisplay();
        
        let upperDeck = "---";
        let firstClass = "---.-";
        let business = "---";
        let pEconomy = "---";
        let fwdEconomy = "---";
        let aftEconomy = "---";

        upperDeck = SaltyDataStore.get("OPTIONS_UPPER_DECK", "");
        firstClass = SaltyDataStore.get("OPTIONS_FIRST_CLASS", "");
        business = SaltyDataStore.get("OPTIONS_BUSINESS_CLASS", "");
        pEconomy = SaltyDataStore.get("OPTIONS_PREMIUM_ECONOMY", "");
        fwdEconomy = SaltyDataStore.get("OPTIONS_FWD_ECONOMY", "");
        aftEconomy = SaltyDataStore.get("OPTIONS_AFT_ECONOMY", "");

        fmc.setTemplate([
            ["PAX CAPACITY"],
            ["\xa0UPPER DECK", "FIRST CLASS\xa0"],
            [upperDeck, firstClass],
            ["\xa0BUSINESS CLASS", "PREMIUM ECONOMY\xa0"],
            [business, pEconomy],
            ["\xa0FWD ECONOMY", "AFT ECONOMY\xa0"],
            [fwdEconomy, aftEconomy],
            [],
            [],
            [],
            [],
            [],
            []
        ]);

        fmc.onPrevPage = () => {
            FMCOptionsMenu.ShowPage1(fmc);
        }

        fmc.onLeftInput[0] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_UPPER_DECK", "32");
            } else {
                SaltyDataStore.set("OPTIONS_UPPER_DECK", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onRightInput[0] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_FIRST_CLASS", "8");
            } else {
                SaltyDataStore.set("OPTIONS_FIRST_CLASS", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onLeftInput[1] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_BUSINESS_CLASS", "48");
            } else {
                SaltyDataStore.set("OPTIONS_BUSINESS_CLASS", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onRightInput[1] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_PREMIUM_ECONOMY", "32");
            } else {
                SaltyDataStore.set("OPTIONS_PREMIUM_ECONOMY", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onLeftInput[2] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_FWD_ECONOMY", "102");
            } else {
                SaltyDataStore.set("OPTIONS_FWD_ECONOMY", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };

        fmc.onRightInput[2] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_AFT_ECONOMY", "142");
            } else {
                SaltyDataStore.set("OPTIONS_AFT_ECONOMY", value);
            }
            FMCOptionsMenu.ShowPage(fmc);
        };
    }
}