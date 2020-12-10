class FMC_CMC_GNDTESTS_EnableTest {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["TO ENABLE TEST", "1", "1"],
				["", "", "CARGO HEAT SYSTEM"],
				["", ""],
				["\xa0-AIRCRAFT ON GROUND", ""],
				["\xa0-ENGINES OFF", ""],
				["\xa0-RELEASE PNEUMATIC", ""],
				["\xa0\xa0PRESSURE", ""],
				["\xa0-SET AFT CARGO SWITCH", ""],
				["\xa0\xa0ON PS TO OFF", ""],
				["", ""],
				["", ""],
				["", "", "__FMCSEPARATOR"],
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