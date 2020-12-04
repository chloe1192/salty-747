class FMCOptionsMenu {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        
        const simbriefUsername = SaltyDataStore.get("OPTIONS_SIMBRIEF_USERNAME", "");
        const simbriefUsernameCell = simbriefUsername != "" ? simbriefUsername : "[ ]";
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
            ["SIMBRIEF USER"],
            [`${simbriefUsernameCell}[color]green`],
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
}