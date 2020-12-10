class FMC_CMC_EICAS_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "CMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["EICAS MAINT PAGES", "1", "3"],
				["", ""],
				["<21 ECS", ""],
				["", ""],
				["<24 ELECTRICAL", ""],
				["", ""],
				["<27 ELECTRICAL", ""],
				["", ""],
				["<28 FUEL", ""],
				["", ""],
				["<29 HYDRAULIC", ""],
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