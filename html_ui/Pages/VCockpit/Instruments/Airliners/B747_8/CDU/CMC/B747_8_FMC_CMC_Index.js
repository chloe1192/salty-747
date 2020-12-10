class FMC_CMC_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["CMC MENU", "1", "2"],
				["", ""],
				["<PRESENT LEG FAULTS", ""],
				["", ""],
				["<CONFIDENCE TESTS", ""],
				["", ""],
				["<EICAS MAINT PAGES", ""],
				["", ""],
				["<GROUND TESTS", ""],
				["", ""],
				["", ""],
				["", "", "__FMCSEPARATOR"],
				["", "HELP>"],
			]);
		}
		updateView();
		
		fmc.onNextPage = () => {
			FMC_SAT_Directory.ShowPage2(fmc);
		};
		
		fmc.onNextPage = () => {
			FMC_CMC_Index.ShowPage2(fmc);
		};
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
	}
	
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["CMC MENU", "2", "2"],
				["", ""],
				["<EXISTING FAULTS", ""],
				["", ""],
				["<FAULT HISTORY", ""],
				["", ""],
				["<OTHER FUNCTIONS", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", "", "__FMCSEPARATOR"],
				["", "HELP>"],
			]);
		}
		updateView();
		
		fmc.onNextPage = () => {
			FMC_CMC_Index.ShowPage(fmc);
		};
		
		fmc.onNextPage = () => {
			FMC_CMC_Index.ShowPage(fmc);
		};
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
    }
}