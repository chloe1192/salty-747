class FMCDlnkWeather {
    static ShowPage(fmc) {
        fmc.clearDisplay();

        let origin = "<----";
        let destination = "---->";
        let alternate = "<----";
        let airport = "---->";
        
        fmc.setTemplate([
            ["WX REQUEST"],
            ["\xa0ORIGIN", "DESTINATION\xa0"],
            [origin, destination],
            ["\xa0ALTERNATE", "AIRPORT\xa0"],
            [alternate, airport],
            [""],
            [""],
            ["", "REQUEST\xa0"],
            ["", "METAR>"],
            ["\xa0RECEIVED", "REQUEST\xa0"],
            ["<MESSAGES", "TAF>"],
            ["\xa0RETURN TO", "REQUEST\xa0"],
            ["<DLNK MENU", "SHORT TAF>"]
        ]);
    }
}