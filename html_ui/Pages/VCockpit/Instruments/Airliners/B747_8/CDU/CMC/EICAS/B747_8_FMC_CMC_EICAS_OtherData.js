class FMC_CMC_EICAS_OtherData {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["OTHER DATA", "1", "1"],
				["", ""],
				["<CONDITIONING", ""],
				["", ""],
				["<SUPPLY", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["<RETURN", ""],
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