class FMC_CMC_PRSNTLEG_Notes {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["NOTES", "1", "1"],
				["", ""],
				["REPLACE THE FUEL SYSTEM", ""],
				["EICAS INTERFACE CARD.", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", "", "__FMCSEPARATOR"],
				["<RETURN", ""],
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_CMC_PRSNTLEG_Msg.ShowPage(fmc);
		}
	}
}