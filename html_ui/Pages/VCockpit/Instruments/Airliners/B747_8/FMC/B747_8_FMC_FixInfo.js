class FMCHoldPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.activeSystem = "FMC";
        fmc.setTemplate([
            ["FIX INFO", "1", "N"],
            ["\xa0HDG", "", "DISNM"],
            ["FIX", "SPD/ALT000"],
            ["\xa0HDG", "", "DISNM"],
            ["FIX", "SPD/ALT000"],
            ["\xa0HDG", "", "DISNM"],
            ["FIX", "SPD/ALT000"],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["__FMCSEPARATOR", "", "HOLD AT"],
            ["□□□□", "PPOS>"]
        ]);
        
        fmc.onLeftInput[5] = () => {
            let value = fmc.inOut;
            fmc.showErrorMessage(holdAtWpt(value));
        };

        fmc.onRightInput[5] = () => {
            let value = new LatLong(SimVar.GetSimVarValue("GPS POSITION LAT", "degree latitude"), SimVar.GetSimVarValue("GPS POSITION LON", "degree longitude")).toDegreeString();
            fmc.showErrorMessage(holdAtPresentPos(value));
        };
    }
}

function holdAtWpt(wpt) {
    return wpt;
}

function holdAtPresentPos(pPos) {
    return pPos;
}
//# sourceMappingURL=B747_8_FMC_IdentPage.js.map