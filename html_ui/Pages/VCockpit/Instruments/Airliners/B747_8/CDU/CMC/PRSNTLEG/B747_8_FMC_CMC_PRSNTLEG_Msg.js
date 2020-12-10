class FMC_CMC_PRSNTLEG_Msg {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["PRESENT LEG MSG", "1", "1"],
				["*FSEIC MAIN FAIL OR", ""],
				["FSEIC MAIN OUTPUT BUS", ""],
				["FAIL", ""],
				["MSG:28573", "ATA:28-43"],
				["09DEC14 0640", ""],
				["EQUIP:Y5BA41", "ES/HRD"],
				["*ADVISORY: 28 40 12 01", ""],
				["<FUEL TEMP SYS", "NOTES>"],
				["", "", "__FMCSEPARATOR"],
				["READ SNAPSHOT", "REPORT>"],
				["", "", ""],
				["<RETURN", "HELP>"],
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_CMC_PRSNTLEG_Index.ShowPage(fmc);
		}
	}
}