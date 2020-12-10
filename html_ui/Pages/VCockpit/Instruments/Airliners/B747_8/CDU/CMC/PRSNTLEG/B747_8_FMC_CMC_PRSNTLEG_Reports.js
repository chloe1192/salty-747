class FMC_CMC_PRSNTLEG_Reports {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["REPORT MENU", "1", "1"],
				["\xa0OFFLINE PRINTER", ""],
				["<PRINTER", ""],
				["\xa0IN PROGRESS", ""],
				["<ACARS", ""],
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