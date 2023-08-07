class ClassA:
    def GetValues(self, km: float):
        classb: ClassB = ClassB()
        knob: float = classb.CalculateKmToKnob(km)
        print(f"Knob: {knob}")

        newKm: float = classb.CalculateKnobToKm(knob)
        print(f"Km: {newKm}")
    
class ClassB:
    def CalculateKnobToKm(self, x: float):
        return x * 1.852

    def CalculateKmToKnob(self, x: float):
        return x / 1.852 
    
km: float = float(input("km: "))
classa: ClassA = ClassA()
classa.GetValues(km)