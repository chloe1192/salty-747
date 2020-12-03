class FMCDlnkWtBal {
    static ShowPage(fmc) {
        fmc.clearDisplay();

        const fuel = SimVar.GetSimVarValue("FUEL TOTAL QUANTITY", "kg");
        const cg = SimVar.GetSimVarValue("CG PERCENT");
        
        fmc.setTemplate([
            ["WT/BAL"],
            ["FUEL", "CG"],
            [fuel, cg],
            [],
            ["<ATC REQUEST", "SEND PIREP>"],
            [],
            ["<PERF REQUEST", "ARR REPORT>"],
            [],
            ["<WT/BAL", "DIVERTING>"],
            [],
            ["<OOOI STATUS", "MISC>"],
            [],
            ["<FLT LOG", "MESSAGES>"]
        ]);
    }
}