// c++Learning.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
using namespace std;


class ClassB
{
public:
    double ConvertKmToKnob(double x)
    {
        return x / 1.852;
    }
    int ConvertKnobToKm(double x)
    {
        return x * 1.852;
    }
};

class ClassA
{
public:
    void GetValues(double km)
    {
        cout << "Km before " << km << "\n";
        ClassB classb;
        double knob = classb.ConvertKmToKnob(km);
        cout << "Knob " << knob << "\n";
        int newKm = classb.ConvertKnobToKm(knob);
        cout << "Km after: " << newKm << "\n";
    }
};

int main()
{
    double km;
    cout << "Km: ";
    cin >> km;
    ClassA classa;
    classa.GetValues(km);
    return 0;
}




// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
