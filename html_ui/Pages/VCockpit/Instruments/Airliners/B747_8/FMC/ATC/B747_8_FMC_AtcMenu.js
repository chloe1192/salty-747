class FMCAtcMenu {
    static ShowPage(fmc) {
        fmc.clearDisplay();
        if (fmc.atc.isLogged) {
            fmc.setTemplate([
                ["ATC INDEX"],
                [],
                ["<EMERGENCY", "POS REPORT>"],
                [],
                ["<REQUEST", "WHEN CAN WE>"],
                [],
                ["<REPORT"],
                [],
                ["<LOG", "CLEARANCE>"],
                [],
                ["<LOGON/STATUS", "VOICE>"],
                ["", "", "__FMCSEPARATOR"],
                ["<PRINT LOG"]
            ]);

            fmc.onLeftInput[0] = () => {
                FMCAtcEmergency.ShowPage(fmc);
            };

            fmc.onLeftInput[1] = () => {
                FMCAtcRequest.ShowPage(fmc);
            };

            fmc.onLeftInput[2] = () => {
                FMCAtcReport.ShowPage(fmc);
            };

            fmc.onLeftInput[3] = () => {
                FMCAtcLog.ShowPage(fmc);
            };

            fmc.onLeftInput[4] = () => {
                FMCAtcLogonSatus.ShowPage(fmc);
            };

            fmc.onLeftInput[5] = () => {
                FMCAtcPrintLog.ShowPage(fmc);
            };

            fmc.onRightInput[0] = () => {
                FMCAtcPosReport.ShowPage(fmc);
            };

            fmc.onRightInput[1] = () => {
                FMCAtcWhenCanWe.ShowPage(fmc);
            };

            fmc.onRightInput[3] = () => {
                FMCAtcClearance.ShowPage(fmc);
            };

            fmc.onRightInput[4] = () => {
                FMCAtcVoice.ShowPage(fmc);
            };
        } else {
            FMCAtcLogonSatus.ShowPage(fmc);
        }
    }
}