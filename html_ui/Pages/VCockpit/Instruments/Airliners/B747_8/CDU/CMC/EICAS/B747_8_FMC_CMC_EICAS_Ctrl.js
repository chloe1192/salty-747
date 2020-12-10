class FMC_CMC_EICAS_Ctrl {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["EICAS PAGE CONTROL", "1", "1"],
				["\xa0ELECTRICAL", "CONDITIONING"],
				["<DISPLAY", "OTHER DATA>"],
				["", ""],
				["\xa0RECORD", ""],
				["", ""],
				["\xa0MANUAL SNAPSHOTS", ""],
				["", ""],
				["\xa0AUTO SNAPSHOTS", ""],
				["", "", "__FMCSEPARATOR"],
				["\xa0ERASE SYSTEM", "REPORT>"],
				["", ""],
				["<RETURN", "HELP>"],
			]);
		}
		updateView();
			
		fmc.onNextPage = () => {
			FMC_CMC_Index.ShowPage3(fmc);
		};
		
		fmc.onNextPage = () => {
			FMC_CMC_Index.ShowPage2(fmc);
		};
		
		fmc.onLeftInput[5] = () => {
			FMC_CMC_Index.ShowPage(fmc);
		}
	}
}