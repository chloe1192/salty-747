class FMC_ACMS_Alpha {
    static ShowPage(fmc) {
		fmc.activeSystem = "ACMS";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["ACMS:ALPHA CALL-UP CTRL"],
				["\xa0ALPHA", "ALPHA MENU"],
				["<LIST", "DISPLAY>"],
				["\xa0SPECIAL FUNCT/", ""],
				["<REPROGRAMMING", "SW OPTIONS>"],
				["", "LIST OF"],
				["<DAR RECRDNG", "PREV REP>"],
				["\xa0STORED", "STORED"],
				["<SAR DATA", "REPORTS>"],
				["\xa0MAN REQST", "MAN REQST"],
				["<SAR RECRDNG", "REPORTS>"],
				["", ""],
				["", ""]
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
	}
}