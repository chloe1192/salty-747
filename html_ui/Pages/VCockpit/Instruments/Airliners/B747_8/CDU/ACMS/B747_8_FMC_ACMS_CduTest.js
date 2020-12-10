class FMC_ACMS_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "ACMS";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["SENSORS", "1", "2"],
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