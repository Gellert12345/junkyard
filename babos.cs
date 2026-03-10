
/*

using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}


*/
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        string mappaUtvonal = @"C:/elérési ut";;
        string fajlNev = "elso.txt";
        string teljesUtvonal = Path.Combine(mappaUtvonal,Directory.CreateDirectory(mappautvonala); //egybe rakja az egészet
        //iras a fájlbaa:
        Console.WriteLine("Írj be sorokat(vége:'vége')");
        using (StreamWriter sw= new StreamWriter(mappaUtvonal,fajlNev))
        {
            string sor;
            while((sor = Console.ReadLine() != "vége"))
            {
                sw.WriteLine(sor);
            }
        }
        //olvasás a fileból és kiirás:
        Console.WriteLine("--a fájl tartalam--");
        if (File.Exists(teljesUtvonal))
        {
            using(StreamReader sr = new StreamReader(teljesUtvonal))
            {
                string tartalam = sr.ReadToEnd();
                Console.WriteLine(tartalam);
            }
        }
        Console.WriteLine("Nyomj egy gombot  a kiépeshez");
        Console.ReadKey();
    }
}