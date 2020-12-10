class FMC_CMC_GNDTESTS_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["GROUND TESTS", "1", "6"],
				["", ""],
				["<21 AIR CONDITIONING", ""],
				["", ""],
				["<21 CABIN PRESSURE", ""],
				["", ""],
				["<21 EQUIP COOLING", ""],
				["", ""],
				["<22 AUTOPILOT FLT DIR", ""],
				["", ""],
				["<22 YAW DAMPER", ""],
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