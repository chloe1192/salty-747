class FMC_CMC_GNDTESTS_Item {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["GROUND TESTS", "1", "3"],
				["", ""],
				["<PTC-A/RECIRC FANS FAIL", ""],
				["\xa0IN PROGRESS", ""],
				["\xa0PTC-B/RECIRC FANC", ""],
				["\xa0STANDBY", ""],
				["<CACC FWD OVHD", ""],
				["", ""],
				["<CACC FWD DISTRIB", "PASS"],
				["\xa0INHIBITED", ""],
				["<CARGO HEAT SYSTEM", ""],
				["", ""],
				["<RETURN", "HELP>"],
			]);
		}
		updateView();
			
		fmc.onNextPage = () => {
			FMC_CMC_GNDTESTS_Item.ShowPage(fmc);
		};
		
		fmc.onNextPage = () => {
			FMC_CMC_GNDTESTS_Item.ShowPage(fmc);
		};
		
		fmc.onLeftInput[5] = () => {
			FMC_CMC_GNDTESTS_Index.ShowPage(fmc);
		}
	}
}