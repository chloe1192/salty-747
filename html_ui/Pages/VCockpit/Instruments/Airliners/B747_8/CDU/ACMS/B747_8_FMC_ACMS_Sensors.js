class FMC_ACMS_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "ACMS";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["SENSOR STATUS", "1", "2"],
				["\xa0LRU", "RIGHT", "LEFT"],
				["VOR", "OK", "OK"],
				["DME", "OK", "OK"],
				["", ""],
				["", ""],
				["ADIRS", "RIGHT", "LEFT"],
				["MMR", "OK", "OK"],
				["QFCS", "----", "OK"],
				["", ""],
				["FQIS", "RIGHT", "LEFT"],
				["QFCS", "----", "OK"],
				["<INDEX", ""]
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
	}
	
    static ShowPage(fmc) {
		fmc.activeSystem = "ACMS";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["SENSOR STATUS", "1", "2"],
				["\xa0LRU", "RIGHT", "LEFT"],
				["A/T", "----", "OK"],
				["", ""],
				["ACARS", "----", "OK"],
				["", ""],
				["NDS DPC", "OK", "OK"],
				["FMC", "OK", "OK"],
				["NFS", "OK", "OK"],
				["", "SR ACMS"],
				["", "REPORT>"],
				["", ""],
				["<INDEX", ""]
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
    }
}