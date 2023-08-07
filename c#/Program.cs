internal class Program
{
    static void Main(string[] args)
    {   
        double km;
        do
        {
            Console.Write("Km: ");
        } while (!double.TryParse(Console.ReadLine(), out km));

        ClassA.GetValues(km);
    }
}
class ClassA
{
    public static void GetValues(double km)
    {
        ClassB test = new();
        double knob = test.CalculateKmToKnob(km);
        Console.WriteLine($"Knob: {knob:N3}");
        double newKm = test.CalculateKnobToKm(knob);
        Console.WriteLine($"Km after: {newKm}");
    }
}

class ClassB
{
    public double CalculateKnobToKm(double x)
    {
        return x * 1.852;
    }

    public double CalculateKmToKnob(double x)
    {
        return x / 1.852;
    }
}