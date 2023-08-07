"use strict";
class ClassA {
    constructor(kilometer) {
        this.Km = kilometer;
    }
    GetValues() {
        const classb = new ClassB(this.Km);
        console.log(`Km before: ${this.Km}`);
        let knob = classb.ConvertKmToKnob();
        console.log(`Knob: ${knob.toFixed(3)}`);
        let newKm = classb.ConvertKnobToKm();
        console.log(`Km after: ${newKm}`);
    }
}
class ClassB {
    constructor(_km) {
        this.Km = _km;
    }
    ConvertKnobToKm() {
        return this.ConvertKmToKnob() * 1.852;
    }
    ConvertKmToKnob() {
        return this.Km / 1.852;
    }
}
function RandomNumber() {
    return Math.floor(Math.random() * 100);
}
const classa = new ClassA(RandomNumber());
classa.GetValues();
