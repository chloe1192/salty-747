class FMCMainDisplayPages {
    static MenuPage(fmc) {
        fmc.clearDisplay();

        const activeSystem = fmc.activeSystem;
        let textFMC;
        let textDLNK;
        let textSATCOM;
        let textCMC;

        if (activeSystem === "FMC") {
            textFMC = "<ACT>";
        }
        if (activeSystem === "DLNK") {
            textDLNK = "<ACT>";
        }
        if (activeSystem === "SATCOM") {
            textSATCOM = "<ACT>";
        }
        if (activeSystem === "CMC") {
            textCMC = "<ACT>";
        }

        const updateView = () => {
            fmc.setTemplate([
                ["MENU"],
                ["", "EFIS CP"],
                ["<FMC", "", textFMC],
                ["", "EICAS CP"],
                ["<DLNK", "", textDLNK],
                ["", "CTL PNL"],
                ["<SATCOM[color]inop", "OFF←→ON>", textSATCOM],
                [],
                ["<SALTY", "PAYLOAD>"],
                [],
                ["", "OPTIONS>"],
                [],
                ["<CMC[color]inop", "", textCMC]
            ]);
        }
        updateView();

        fmc.onLeftInput[0] = () => { 
            fmc.activeSystem = "FMC";
            FMCIdentPage.ShowPage1(fmc); 
        };

        fmc.onLeftInput[1] = () => { 
            fmc.activeSystem = "DLNK";
            FMCDlnkMenu.ShowPage1(fmc); 
        };
        
        fmc.onLeftInput[3] = () => {
            FMCSaltyOptions.ShowPage1(fmc); 
        };

        fmc.onRightInput[3] = () => {
            FMCPayloadFuel.ShowPage1(fmc);
        };

        fmc.onRightInput[4] = () => {
            FMCOptionsMenu.ShowPage1(fmc);
        };
    }
    static PerfInitPage(fmc) {
    }
    static FuelPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["FUEL"],
            ["TOTAL KGS", "GW / MTW"],
            ["80880", "305.2/397.8"],
            ["LEVEL", "ZFW", "TOCG"],
            ["46,7%", "224.4", "23.0%"],
            ["", "FUEL DENSITY"],
            ["<LONG RANGE", "0.803"],
            ["", "PLAN FUEL (KGS)"],
            ["<MED RANGE", "N/A"],
            [],
            ["<SHORT RANGE"],
            [],
            ["<RETURN"]
        ]);
    }
    static PayloadPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["PAYLOAD"],
            ["UPR BUS", "GW / MTW"],
            ["24/42", "305.2/397.8"],
            ["MAIN PASS", "ZFW", "TOCG"],
            ["127/2254", "224.4", "23.0%"],
            ["MAIN CARGO", "LOAD LEVEL"],
            ["7695", "56.6%"],
            ["FWD/AFT CARGO", ""],
            ["9968/8735", "SET MAX>"],
            ["BULK CARGO"],
            ["1847", "SET EMPTY>"],
            [],
            ["<RETURN", "SET RANDOM>"]
        ]);
    }
}
//# sourceMappingURL=B747_8_FMC_MainDisplayPages.js.map