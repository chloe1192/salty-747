class FMC_ACMS_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "ACMS";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["ACMS"],
				["", "", "PARAMETER CALL-UP"],
				["<LABEL", "ALPHA>"],
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
    static ShowPage3(fmc) {
		fmc.activeSystem = "ACMS";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["ACMS MENU", "1", "2"],
				["", ""],
				["<INFLT FAULT", "MODEL/ENG>"],
				["", ""],
				["<CDU TEST", "SW OPTIONS>"],
				["", ""],
				["<SENSORS", "PERF FACTR>"],
				["", ""],
				["<DISCRETES", "IRS MONITOR>"],
				["", ""],
				["<FIXED OUTPUTS", ""],
				["", "AMCS"],
				["<INDEX", "REPORT>"]
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
	}
	
    static ShowPage2(fmc) {
		fmc.activeSystem = "ACMS";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["ACMS MENU", "2", "2"],
				["", ""],
				["<INFLT FAULT", "MODEL/ENG>"],
				["", ""],
				["<CDU TEST", "SW OPTIONS>"],
				["", ""],
				["<SENSORS", "PERF FACTR>"],
				["", ""],
				["<DISCRETES", "IRS MONITOR>"],
				["", ""],
				["<FIXED OUTPUTS", ""],
				["", "AMCS"],
				["<INDEX", "REPORT>"]
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
    }
}