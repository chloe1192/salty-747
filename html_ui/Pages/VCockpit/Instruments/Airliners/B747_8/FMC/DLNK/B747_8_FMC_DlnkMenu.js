class FMCDlnkMenu {
    static ShowPage1(fmc) {
        fmc.clearDisplay();

        fmc.activeSystem = "DLNK";

        fmc.setTemplate([
            ["ACARS MAIN MENU", "1", "2"],
            [],
            ["<PREFLIGHT", "FLT LOG>"],
            [],
            ["<INFLIGHT", "ATS LOG>"],
            [],
            ["<POSTFLIGHT", "REPORTS>"],
            [],
            ["", "REQUESTS>"],
            [],
            ["", "MISC>"],
            [],
            ["", ""]
        ]);

        fmc.onNextPage = () => {
            FMCDlnkMenu.ShowPage2(fmc);
        }

        fmc.onLeftInput[0] = () => {
            FMCDlnkPreflight.ShowPage1(fmc);
        };

        fmc.onLeftInput[1] = () => {
            FMCDlnkInflight.ShowPage(fmc);
        };

        fmc.onLeftInput[2] = () => {
            FMCDlnkPostflight.ShowPage(fmc);
        };

        fmc.onLeftInput[3] = () => {
            FMCDlnkWtBal.ShowPage1(fmc)
        };

        fmc.onLeftInput[4] = () => {
            FMCDlnkOooi.ShowPage(fmc)
        };

        fmc.onLeftInput[5] = () => {
            FMCDlnkFltLog.ShowPage(fmc)
        };

        fmc.onRightInput[0] = () => {
            FMCDlnkWeather.ShowPage(fmc);
        };

        fmc.onRightInput[1] = () => {
            FMCDlnkInflight.ShowPage(fmc);
        };

        fmc.onRightInput[2] = () => {
            FMCDlnkPostflight.ShowPage(fmc);
        };

        fmc.onRightInput[3] = () => {
            FMCDlnkWtBal.ShowPage(fmc)
        };

        fmc.onRightInput[4] = () => {
            FMCDlnkMisc.ShowPage(fmc)
        };

        fmc.onRightInput[5] = () => {
            FMCDlnkMessages.ShowPage(fmc)
        };
    }

    static ShowPage2(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["DLNK MAIN MENU", "2", "2"],
            [],
            ["<ATIS", "LOADSHEET>"],
            [],
            ["<RELEASE"],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]);        

        fmc.onPrevPage = () => {
            FMCDlnkMenu.ShowPage1(fmc);
        }

        fmc.onLeftInput[0] = () => {
            FMCDlnkAtis.ShowPage(fmc);
        };

        fmc.onLeftInput[1] = () => {
            FMCDlnkAtis.ShowPage(fmc);
        };

        fmc.onRightInput[0] = () => {
            FMCDlnkLoadsheet.ShowPage(fmc);
        };
    }
}