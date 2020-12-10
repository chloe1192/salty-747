class FMC_CMC_PRSNTLEG_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();

		if (faultDetected) {
		
			const updateView = () => {
				fmc.setTemplate([
					["PRESENT LEG FAULTS", "1", "2"],
					["*ADVISORY: 28 40 12 01", ""],
					["<FUEL TEMP SYS", ""],
					["*STATUS:", ""],
					["<OIL PRESS SNS 4", "ERASE>"],
					["*ADVISORY: 29 11 47 01", ""],
					["<HYD CONTROL 1", ""],
					["*ADVISORY: 21 51 18 01", ""],
					["<PACK 2", ""],
					["", "", "__FMCSEPARATOR"],
					["<ERASE STATUS", "REPORT>"],
					["", ""],
					["<RETURN", "HELP>"],
				]);
			}
			updateView();
			
			fmc.onNextPage = () => {
				FMC_CMC_Index.ShowPage2(fmc);
			};
			
			fmc.onNextPage = () => {
				FMC_CMC_Index.ShowPage2(fmc);
			};
			
			fmc.onLeftInput[5] = () => {
				FMC_CMC_Index.ShowPage(fmc);
			}
		} else {		
			const updateView = () => {
				fmc.setTemplate([
					["PRESENT LEG FAULTS", "1", "1"],
					["", ""],
					["", ""],
					["", ""],
					["NO FLIGHT DECK EFFECTS", ""],
					["REPORTED DURING THIS", ""],
					["FLIGHT", ""],
					["", ""],
					["<NON-FDE FAULTS", ""],
					["", "", "__FMCSEPARATOR"],
					["<ERASE STATUS", "REPORT>"],
					["", ""],
					["<RETURN", "HELP>"]
				])
			}
			updateView();
			
			fmc.onLeftInput[5] = () => {
				FMC_CMC_Index.ShowPage(fmc);
			}
		}
	}
	
    static ShowPage2(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["PRESENT LEG FAULTS", "2", "2"],
				["*ADVISORY: 28 40 12 01", ""],
				["<FUEL TEMP SYS", ""],
				["*STATUS:", ""],
				["<OIL PRESS SNS 4", "ERASE>"],
				["*ADVISORY: 29 11 47 01", ""],
				["<HYD CONTROL 1", ""],
				["*ADVISORY: 21 51 18 01", ""],
				["<PACK 2", ""],
				["", "", "__FMCSEPARATOR"],
				["<ERASE STATUS", "REPORT>"],
				["", ""],
				["<RETURN", "HELP>"],
			]);
		}
		updateView();
		
		fmc.onNextPage = () => {
			FMC_CMC_Index.ShowPage(fmc);
		};
		
		fmc.onNextPage = () => {
			FMC_CMC_Index.ShowPage(fmc);
		};
		
		fmc.onLeftInput[0] = () => {
			FMC_CMC_PRSNTLEG_Msg.ShowPage(fmc);
		}
		
		fmc.onLeftInput[1] = () => {
			FMC_CMC_PRSNTLEG_Msg.ShowPage(fmc);
		}
		
		fmc.onLeftInput[2] = () => {
			FMC_CMC_PRSNTLEG_Msg.ShowPage(fmc);
		}
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
    }
}