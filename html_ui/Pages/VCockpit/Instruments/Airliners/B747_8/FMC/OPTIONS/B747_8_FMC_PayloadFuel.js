class FMCPayloadFuel {
    static ShowPage1(fmc) {
        fmc.clearDisplay();

        let fuel = SimVar.GetSimVarValue("FUEL TOTAL QUANTITY WEIGHT", fmc.units.weight);
        let fuelCapacity = SimVar.GetSimVarValue("FUEL TOTAL CAPACITY", fmc.units.weight);

        fmc.setTemplate([
            ["LOAD"],
            ["FUEL"],
            [`${fuel}[color]green`],
            ["WEIGHT UNITS", "TEMP UNITS"],
            ["weightUnitsCell"],
            ["REG"],
            ["acftRegistration"],
            ["PAX WEIGHT"],
            ["paxWeightCell"],
            [],
            [],
            [],
            []
        ]);

        fmc.onNextPage = () => {
            FMCPayloadFuel.ShowPage2(fmc);
        }

        fmc.onLeftInput[4] = async () => {
            if (currentBlockFuel) {
                const outerTankCapacity = 200; // Left and Right
                const innerTankCapacity = 1800; // Left and Right
                const centerTankCapacity = 3000; // Center

                const fuelWeightPerGallon = SimVar.GetSimVarValue("FUEL WEIGHT PER GALLON", "kilograms");
                let currentBlockFuelInGallons = +currentBlockFuel / +fuelWeightPerGallon;

                const outerTankFill = Math.min(outerTankCapacity, currentBlockFuelInGallons / 2);
                await SimVar.SetSimVarValue(`FUEL TANK LEFT AUX QUANTITY`, "Gallons", outerTankFill);
                await SimVar.SetSimVarValue(`FUEL TANK RIGHT AUX QUANTITY`, "Gallons", outerTankFill);
                currentBlockFuelInGallons -= outerTankFill * 2;

                const innerTankFill = Math.min(innerTankCapacity, currentBlockFuelInGallons / 2);
                await SimVar.SetSimVarValue(`FUEL TANK LEFT MAIN QUANTITY`, "Gallons", innerTankFill);
                await SimVar.SetSimVarValue(`FUEL TANK RIGHT MAIN QUANTITY`, "Gallons", innerTankFill);
                currentBlockFuelInGallons -= innerTankFill * 2;

                const centerTankFill = Math.min(centerTankCapacity, currentBlockFuelInGallons);
                await SimVar.SetSimVarValue(`FUEL TANK CENTER QUANTITY`, "Gallons", centerTankFill);
                currentBlockFuelInGallons -= centerTankFill;

                mcdu.updateFuelVars();

                updateView();
            }
        };

        fmc.onLeftInput[0] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            value = parseInt(value);
            FMCPayloadFuel.ShowPage(fmc);
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
            FMCPayloadFuel.ShowPage1(fmc);
        }

        fmc.onLeftInput[0] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_UPPER_DECK", "32");
            } else {
                SaltyDataStore.set("OPTIONS_UPPER_DECK", value);
            }
            FMCPayloadFuel.ShowPage(fmc);
        };

        fmc.onRightInput[0] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_FIRST_CLASS", "8");
            } else {
                SaltyDataStore.set("OPTIONS_FIRST_CLASS", value);
            }
            FMCPayloadFuel.ShowPage(fmc);
        };

        fmc.onLeftInput[1] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_BUSINESS_CLASS", "48");
            } else {
                SaltyDataStore.set("OPTIONS_BUSINESS_CLASS", value);
            }
            FMCPayloadFuel.ShowPage(fmc);
        };

        fmc.onRightInput[1] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_PREMIUM_ECONOMY", "32");
            } else {
                SaltyDataStore.set("OPTIONS_PREMIUM_ECONOMY", value);
            }
            FMCPayloadFuel.ShowPage(fmc);
        };

        fmc.onLeftInput[2] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_FWD_ECONOMY", "102");
            } else {
                SaltyDataStore.set("OPTIONS_FWD_ECONOMY", value);
            }
            FMCPayloadFuel.ShowPage(fmc);
        };

        fmc.onRightInput[2] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_AFT_ECONOMY", "142");
            } else {
                SaltyDataStore.set("OPTIONS_AFT_ECONOMY", value);
            }
            FMCPayloadFuel.ShowPage(fmc);
        };
    }
}