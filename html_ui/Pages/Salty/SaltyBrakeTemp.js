class SaltyBrakeTemp {
    constructor() {
        console.log("SaltyBrakeTemp loaded");
    }
    init() {
        this.ambientTemperature = SimVar.GetSimVarValue("AMBIENT TEMPERATURE", "celsius");
        this.brakesInit();
    }
    update(_deltaTime) {
        let brakesTemp = [];
        brakesTemp = [
            SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_1", "celsius"),
            SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_2", "celsius"),
            SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_3", "celsius"),
            SimVar.GetSimVarValue("L:747_BRAKE_TEMPERATURE_4", "celsius")
        ];
        const trueAirspeed = SimVar.GetSimVarValue("AIRSPEED TRUE", "Meters per second");
        const gearLeft = SimVar.GetSimVarValue("GEAR LEFT POSITION", "Percent Over 100");
        const gearRight = SimVar.GetSimVarValue("GEAR RIGHT POSITION", "Percent Over 100");
        const tempDiff1 = brakesTemp[0] - this.ambientTemperature;
        const tempDiff2 = brakesTemp[1] - this.ambientTemperature;
        const tempDiff3 = brakesTemp[2] - this.ambientTemperature;
        const tempDiff4 = brakesTemp[3] - this.ambientTemperature;
        const brakeLeft = SimVar.GetSimVarValue("BRAKE LEFT POSITION", "position 32k");
        const brakeRight = SimVar.GetSimVarValue("BRAKE LEFT POSITION", "position 32k");
        const wheelRpm1 = SimVar.GetSimVarValue("WHEEL RPM:1", "rpm");
        const wheelRpm2 = SimVar.GetSimVarValue("WHEEL RPM:2", "rpm");

        /* COOLING */
        brakesTemp[0] = _deltaTime / 1000 * this.brakesCooling(tempDiff1, trueAirspeed, gearLeft);
        brakesTemp[1] = _deltaTime / 1000 * this.brakesCooling(tempDiff2, trueAirspeed, gearLeft);
        brakesTemp[2] = _deltaTime / 1000 * this.brakesCooling(tempDiff3, trueAirspeed, gearLeft);
        brakesTemp[3] = _deltaTime / 1000 * this.brakesCooling(tempDiff4, trueAirspeed, gearLeft);

        /* HEATING */
        const wheelsAreSpinning = wheelRpm1 > 10 || wheelRpm2 > 10;
        const anyBrakePressed = currentBrakeLeft > 0 || currentBrakeRight > 0;

        if (anyBrakePressed && wheelsAreSpinning) {
            // Apply heat up for each temperature

            const deltaHeatUpWheelSet1 = (_deltaTime / 1000) * this.brakesHeating(currentBrakeLeft, wheelSet1Rpm);

            if (brakeLeft > 0) {
                brakesTemp[0] += this.getRandomArbitrary(0.5, 1.5) * deltaHeatUpWheelSet1;
                brakesTemp[2] += this.getRandomArbitrary(0.5, 1.5) * deltaHeatUpWheelSet2;
            }

            const deltaHeatUpWheelSet2 = (_deltaTime / 1000) * this.brakesHeating(currentBrakeLeft, wheelSet2Rpm);

            if (brakeRight > 0) {
                brakesTemp[1] += this.getRandomArbitrary(0.5, 1.5) * deltaHeatUpWheelSet1;
                brakesTemp[3] += this.getRandomArbitrary(0.5, 1.5) * deltaHeatUpWheelSet2;
            }
        }
    }

    brakesInit() {
        const brakeVar1 = this.ambientTemperature + (Math.random() * (80 - 15) + 15);
        const brakeVar2 = this.ambientTemperature + (Math.random() * (80 - 15) + 15);
        const brakeVar3 = this.ambientTemperature + (Math.random() * (80 - 15) + 15);
        const brakeVar4 = this.ambientTemperature + (Math.random() * (80 - 15) + 15);
        SimVar.SetSimVarValue("L:747_BRAKE_TEMPERATURE_1", "celsius", brakeVar1);
        SimVar.SetSimVarValue("L:747_BRAKE_TEMPERATURE_2", "celsius", brakeVar2);
        SimVar.SetSimVarValue("L:747_BRAKE_TEMPERATURE_3", "celsius", brakeVar3);
        SimVar.SetSimVarValue("L:747_BRAKE_TEMPERATURE_4", "celsius", brakeVar4);
    }

    brakesHeating(brakePos, wheelRpm) {
        return 0.000035 * (brakePos / 32767) * (wheelRpm ** 2);
    }

    brakesCooling(tempDiff, speed, gear) {
        return tempDiff * (gear * speed * 0.08);
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
