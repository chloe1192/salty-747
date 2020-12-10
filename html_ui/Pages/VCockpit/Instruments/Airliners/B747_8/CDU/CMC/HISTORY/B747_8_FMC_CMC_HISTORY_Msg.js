class FMC_CMC_HISTORY_Msg {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["EXISTING FAULTS MSG", "1", "1"],
				["", "", "PTC-B/RECIRC FANS"],
				["", ""],
				["\xa0-SET UPR AND LWR RECIRC", ""],
				["\xa0\xa0SWITCHES ON P5 TO ON", ""],
				["", ""],
				["\xa0-PULL OUT CIRCUIT", ""],
				["\xa0\xa0BREAKER P6F35 (PTC-A)", ""],
				["", ""],
				["", ""],
				["", ""],
				["", "", "__FMCSEPARATOR"],
				["<RETURN", "START TEST>"],
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