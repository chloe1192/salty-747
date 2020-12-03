class FMCOptionsMenu {
    static ShowPage(fmc) {
        const simbriefUsername = SaltyDataStore.get("OPTIONS_SIMBRIEF_USERNAME", "");
        const simbriefUsernameCell = simbriefUsername != "" ? simbriefUsername : "[ ]";
        const weightUnits = SaltyDataStore.get("OPTIONS_WEIGHT_UNITS", "");
        const weightUnitsCell = simbriefUsername != "" ? simbriefUsername : "[ ]";
        const tempUnits = SaltyDataStore.get("OPTIONS_TEMP_UNITS", "");
        const tempUnitsCell = simbriefUsername != "" ? simbriefUsername : "[ ]";
        const acftRegistration = "D-ABYT";
        const selCal = "DSLM";

        fmc.clearDisplay();
        fmc.setTemplate([
            ["COMPANY OPTIONS"],
            ["SIMBRIEF USERNAME"],
            [`${simbriefUsernameCell}[color]green`],
            ["WEIGHT UNITS", "TEMPERATURE UNITS"],
            [weightUnitsCell, tempUnitsCell],
            [],
            ["REG", "SELCAL"],
            [acftRegistration, selcal],
            ["PAX WEIGHT", "BAG WEIGHT"],
            ["175", "55"],
            [],
            [],
            []
        ]);

        mcdu.onLeftInput[1] = (value) => {
            if (value === FMCMainDisplay.clrValue) {
                SaltyDataStore.set("OPTIONS_SIMBRIEF_USERNAME", "");
            } else {
                SaltyDataStore.set("OPTIONS_SIMBRIEF_USERNAME", value);
            }
            FMCOptionsMenu.ShowPage(mcdu);
        };

        fmc.onLeftInput[2] = () => {
            FMCDlnkPerfRequest.ShowPage();
        };

        fmc.onLeftInput[3] = () => {
            FMCDlnkWtBal.ShowPage(fmc)
        };
    }
}