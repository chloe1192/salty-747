class FMCDlnkWtBal {
    static ShowPage1(fmc) {
        fmc.clearDisplay();

        let blockFuel = "---.-";
        let estZfw = "---.-";
        let taxiFuel = "--.-";
        const cgPercent = SimVar.GetSimVarValue("CG PERCENT", "percent");
        const cgColor = cgPercent >= 14 && cgPercent <= 44 ? 'white' : 'red';
        const cg = `${cgPercent.toFixed(1)}[color]${cgColor}`;
        let tripFuel = "---.-";
        let payload = "---.-";

        if (fmc.simbrief.blockFuel) {
            blockFuel = fmc.formatWeightInTons(fmc.simbrief.blockFuel);
        }
        if (fmc.simbrief.estZfw) {
            estZfw = fmc.formatWeightInTons(fmc.simbrief.estZfw);
        }
        if (fmc.simbrief.taxiFuel) {
            taxiFuel = fmc.formatWeightInTons(fmc.simbrief.taxiFuel);
        }
        if (fmc.simbrief.tripFuel) {
            tripFuel = fmc.formatWeightInTons(fmc.simbrief.tripFuel);
        }
        if (fmc.simbrief.payload) {
            payload = fmc.formatWeightInTons(fmc.simbrief.payload);
        }
        fmc.setTemplate([
            ["WT/BAL PAGE"],
            ["BLOCK FUEL", "ZFW"],
            [blockFuel, estZfw],
            ["TAXI FUEL", "CG"],
            [taxiFuel, cg],
            ["TRIP FUEL", "PAYLOAD"],
            [tripFuel, payload],
            ["\xa0BOARDING"],
            ["<START"],
            ["\xa0FUEL"],
            ["<LOAD"],
            [""],
            ["<ACARS MENU"]
        ]);

        fmc.onNextPage = () => {
            FMCDlnkWtBal.ShowPage2(fmc);
        }
        
        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }
    }

    static ShowPage2(fmc) {
        fmc.clearDisplay();

        let fob = fmc.getFOB();
        let fobCell = "--.-";
        let weights = fmc.getWeights("kg");
        let payloadCell = "---.-";
        let fuelCell = "---.-";
        let crewWeightCell = "---.-";
        let businessClassUpperDeckCell = "---.-";
        let firstClassCell = "---.-";
        let businessClassMainDeckCell = "---.-";
        let premiumEconomyCell = "---.-";
        let fowardEconomyCabinCell = "---.-";
        let rearEconomyCabinCell = "---.-";
        let fowardBaggageCell = "---.-";
        let rearBaggageCell = "---.-";

        if (fob) {
            fobCell = fmc.formatWeight(fob);
        }
        if (weights) {
            crewWeightCell = fmc.formatPayloadWeight(weights.pilot + weights.coPilot + weights.crew);
            businessClassUpperDeckCell = fmc.formatPayloadWeight(weights.businessClassUpperDeck);
            firstClassCell = fmc.formatPayloadWeight(weights.firstClass);
            businessClassMainDeckCell = fmc.formatPayloadWeight(weights.businessClassMainDeck);
            premiumEconomyCell = fmc.formatPayloadWeight(weights.premiumEconomy);
            fowardEconomyCabinCell = fmc.formatPayloadWeight(weights.fowardEconomyCabin);
            rearEconomyCabinCell = fmc.formatPayloadWeight(weights.rearEconomyCabin);
            fowardBaggageCell = fmc.formatPayloadWeight(weights.fowardBaggage);
            rearBaggageCell = fmc.formatPayloadWeight(weights.rearBaggage);
        }
        fmc.setTemplate([
            ["WT/BAL PAGE"],
            ["\xa0FOB", "PAYLOAD\xa0"],
            [fobCell, payloadCell],
            ["\xa0CREW"],
            [crewWeightCell],
            ["\xa0UPPER DECK", "FIRST CLASS\xa0"],
            [businessClassUpperDeckCell, firstClassCell],
            ["\xa0BUSINESS CLASS", "PREMIUM ECONOMY\xa0"],
            [businessClassMainDeckCell, premiumEconomyCell],
            ["\xa0FWD ECONOMY", "AFT ECONOMY\xa0"],
            [fowardEconomyCabinCell, rearEconomyCabinCell],
            ["\xa0RETURN TO"],
            ["<DLNK MENU"]
        ]);

        fmc.onPrevPage = () => {
            FMCDlnkWtBal.ShowPage1(fmc);
        }
        
        fmc.onLeftInput[5] = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }
    }
}