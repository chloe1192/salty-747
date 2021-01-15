class SaltyBase {
    constructor() {
        this.irs = new SaltyIRS();
        this.brakeTemp = new SaltyBrakeTemp();
    }
    init() {
        this.irs.init();
        this.brakeTemp.init();
    }
    update() {
        this.irs.update();
        this.brakeTemp.update();
    }
}