using System;

class Program
{
    static void Main(string[] args)
    {
        string mappaUtvonal = @"C:\premo\ketto\";
        string fajlNev = "autok.txt";
        string teljesUtvonal = Path.Combine(mappaUtvonal, fajlNev);
        List<string> autok = new List<string>();




        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine($"{i}. autó adatai:");
            Console.Write("Név: "); string nev = Console.ReadLine();
            Console.Write("Ajtók: "); string ajtok = Console.ReadLine();
            Console.Write("LE: "); string loero = Console.ReadLine();
            autok.Add($"{nev} {ajtok} {loero} ");
        }


        try
        {

            Directory.CreateDirectory(mappaUtvonal);
            File.WriteAllLines(teljesUtvonal, autok);
            Console.WriteLine("--- Mentés sikeres ---");



            Console.WriteLine("A fájl tartalma:");
            string[] beolvasottSorok = File.ReadAllLines(teljesUtvonal);
            foreach (string sor in beolvasottSorok)
            {
                Console.WriteLine(sor);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Hiba: " + e.Message);
        }


        Console.ReadKey();

    }
}