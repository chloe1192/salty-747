class FMCAtcEmergency {
    static ShowPage(fmc) {
        fmc.clearDisplay();

        let divertTo = "----";
        let sob = "---";
        let offset = "---";
        let fuel = "0.0KG\xa0\xa0\xa000+00";
        let descendTo = "10000";
        let erase = "<ERASE EMERGENCY";

        fmc.setTemplate([
            ["EMERGENCY REPORT"],
            [],
            ["<MAYDAY", "PAN>"],
            ["\xa0DIVERT TO", "SOB\xa0"],
            [`<${divertTo}`, sob],
            ["\xa0OFFSET", "FUEL REMAINING\xa0"],
            [offset, fuel],
            ["DESCEND TO"],
            [`<${descendTo}`],
            [],
            [erase],
            [],
            ["<INDEX", "VERIFY>"]
        ]);

        fmc.onLeftInput[5] = () => {
            FMCAtcMenu.ShowPage(fmc);
        };

        fmc.onRightInput[5] = () => {
            FMCAtcEmergency.ShowVerify1(fmc);
        };
    }

    static ShowVerify1(fmc) {
        fmc.clearDisplay();

        fmc.setTemplate([
            ["VERIFY EMERGENCY", "1", "2"],
            ["/DESCENDING TO"],
            ["10000"],
            ["/"],
            ["00+00"],
            ["\xa0OF FUEL REMAINING AND"],
            ["300"],
            ["\xa0SOULS ON BOARD"],
            [""],
            [""],
            [],
            ["------- CONTINUED -------"],
            ["<EMERGENCY"]
        ]);

        fmc.onNextPage = () => {
            FMCAtcEmergency.ShowVerify2(fmc);
        }

        fmc.onLeftInput[5] = () => {
            FMCAtcEmergency.ShowPage(fmc);
        }
    }

    static ShowVerify1(fmc) {
        fmc.clearDisplay();

        fmc.setTemplate([
            ["VERIFY EMERGENCY", "2", "2"],
            ["/FREE TEXT"],
            ["<"],
            [""],
            ["<"],
            [""],
            ["<"],
            [""],
            ["<"],
            ["", "REPORT\xa0"],
            ["", "SEND>"],
            ["__FMCSEPARATOR"],
            ["<EMERGENCY"]
        ]);

        fmc.onPrevPage = () => {
            FMCAtcEmergency.ShowVerify2(fmc);
        }

        fmc.onLeftInput[5] = () => {
            FMCAtcEmergency.ShowPage(fmc);
        }
    }
}