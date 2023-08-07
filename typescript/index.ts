class ClassA {
    Km: number;

    constructor(kilometer: number) {
        this.Km = kilometer;
    }

    GetValues(): void {
        const classb = new ClassB(this.Km);
        console.log(`Km before: ${this.Km}`)
        let knob = classb.ConvertKmToKnob();
        console.log(`Knob: ${knob.toFixed(3)}`);
        let newKm = classb.ConvertKnobToKm();
        console.log(`Km after: ${newKm}`);
    }
}

class ClassB {

    Km: number;

    constructor(_km: number) {
        this.Km = _km;
    }
    
    ConvertKnobToKm(): number {
        return this.ConvertKmToKnob() * 1.852;
    }

    ConvertKmToKnob(): number {
        return this.Km / 1.852;
    }
}

function RandomNumber(): number {
    return Math.floor(Math.random() * 100)
}

const classa: ClassA = new ClassA(RandomNumber());
classa.GetValues();