var B747_8_LowerEICAS_GEAR;
(function (B747_8_LowerEICAS_GEAR) {
    class Display extends Airliners.EICASTemplateElement {
        constructor() {
            super();
            this.isInitialised = false;
        }
        get templateID() { return "B747_8LowerEICASGEARTemplate" }
        connectedCallback() {
            super.connectedCallback();
            TemplateElement.call(this, this.init.bind(this));
        }
        init() {
            this.isInitialised = true;
            this.saltyBrakeTemp = new SaltyBrakeTemp();
            this.view = {                
                // Brake temperature indicators
                brakes: {
                    // Temperature
                    temps: [
                        this.querySelector("#braketemp1"),
                        this.querySelector("#braketemp2"),
                        this.querySelector("#braketemp3"),
                        this.querySelector("#braketemp4"),
                        this.querySelector("#braketemp5"),
                        this.querySelector("#braketemp6"),
                        this.querySelector("#braketemp7"),
                        this.querySelector("#braketemp8"),
                        this.querySelector("#braketemp9"),
                        this.querySelector("#braketemp10"),
                        this.querySelector("#braketemp11"),
                        this.querySelector("#braketemp12"),
                        this.querySelector("#braketemp13"),
                        this.querySelector("#braketemp14"),
                        this.querySelector("#braketemp15"),
                        this.querySelector("#braketemp16"),
                    ],
                }
            }
            this.gearDoorOpenLines = document.querySelector("#open-labels");
            this.gearDoorClosedText = document.querySelector("#closed-labels");

            this.currentDisplayedBrakeTemps = [
                SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_1", "celsius"),
                SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_2", "celsius"),
                SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_3", "celsius"),
                SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_4", "celsius")
            ];

            this.brakeTemperatureDidChange = [true, true, true, true];
        }
        update(_deltaTime) {
            const currentBrakeLeft = SimVar.GetSimVarValue("BRAKE LEFT POSITION", "position 32k");
            const currentBrakeRight = SimVar.GetSimVarValue("BRAKE RIGHT POSITION", "position 32k");
            const wheelSet2Rpm = SimVar.GetSimVarValue("WHEEL RPM:2", "rpm");

            if (!this.isInitialised) {
                return;
            }
            var GearDoorsOpen = SimVar.GetSimVarValue("GEAR POSITION", "enum");
            var GearAnimClosed = SimVar.GetSimVarValue("GEAR ANIMATION POSITION", "percent");
        		
            if ((GearDoorsOpen == 1) || (GearAnimClosed == 0)) {
            	this.gearDoorOpenLines.style.visibility = "hidden";
            	this.gearDoorClosedText.style.visibility = "visible";
            } else {
            	this.gearDoorOpenLines.style.visibility = "visible";   
            	this.gearDoorClosedText.style.visibility = "hidden";
            }
            this.updateBrakeTemp(_deltaTime);
        }
        updateBrakeTemp(_deltaTime) {
            this.view.brakes.temps[0].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_1", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[1].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_1", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[2].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_2", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[3].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_2", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[4].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_1", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[5].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_1", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[6].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_2", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[7].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_2", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[8].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_3", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[9].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_3", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[10].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_4", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[11].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_4", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[12].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_3", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[13].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_3", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[14].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_4", "celsius") / 100).toFixed(1);
            this.view.brakes.temps[15].textContent = (SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_4", "celsius") / 100).toFixed(1);
        }
    }
    B747_8_LowerEICAS_GEAR.Display = Display;
})(B747_8_LowerEICAS_GEAR || (B747_8_LowerEICAS_GEAR = {}));
customElements.define("b747-8-lower-eicas-gear", B747_8_LowerEICAS_GEAR.Display);
//# sourceMappingURL=B747_8_LowerEICAS_GEAR.js.map