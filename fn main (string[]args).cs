using System;
using System.Collections.Generic;
using System.IO;

class Car
{
    public string rendszam;
    public string marka;
    public int ar;
    public int vegsebesseg;
    public int evjarat;

    public Car(string r, string m, int a, int v, int e)
    {
        rendszam = r;
        marka = m;
        ar = a;
        vegsebesseg = v;
        evjarat = e;
    }
}

class Program
{
    static void Main(string[] args)
    {
        List<Car> autok = new List<Car>();

        string[] sorok = File.ReadAllLines("cars.txt");

        for (int i = 0; i < sorok.Length; i++)
        {
            string[] adatok = sorok[i].Split(';');

            string rendszam = adatok[0];
            string marka = adatok[1];
            int ar = int.Parse(adatok[2]);
            int sebesseg = int.Parse(adatok[3]);
            int ev = int.Parse(adatok[4]);

            Car auto = new Car(rendszam, marka, ar, sebesseg, ev);
            autok.Add(auto);
        }

        // 1. Autók száma
        Console.WriteLine("1. Autók száma: " + autok.Count);

        // 2. Összes ár
        int osszar = 0;

        for (int i = 0; i < autok.Count; i++)
        {
            osszar += autok[i].ar;
        }

        Console.WriteLine("2. Összes ár: " + osszar + " Ft");

        // 3. Legdrágább autó
        Car legdragabb = autok[0];

        for (int i = 1; i < autok.Count; i++)
        {
            if (autok[i].ar > legdragabb.ar)
            {
                legdragabb = autok[i];
            }
        }

        Console.WriteLine("3. Legdrágább: " + legdragabb.marka +
                          " - " + legdragabb.ar + " Ft");

        // 4. Leggyorsabb autó
        Car leggyorsabb = autok[0];

        for (int i = 1; i < autok.Count; i++)
        {
            if (autok[i].vegsebesseg > leggyorsabb.vegsebesseg)
            {
                leggyorsabb = autok[i];
            }
        }

        Console.WriteLine("4. Leggyorsabb: " + leggyorsabb.marka +
                          " - " + leggyorsabb.vegsebesseg + " km/h");

        // 5. Átlagsebesség
        int sebesegosszeg = 0;

        for (int i = 0; i < autok.Count; i++)
        {
            sebesegosszeg += autok[i].vegsebesseg;
        }

        double atlagsebeseg = (double)sebesegosszeg / autok.Count;

        Console.WriteLine("5. Átlagsebesség: " + atlagsebeseg);

        // 6. 5 milliónál drágább autók száma
        int dragabbdarab = 0;

        for (int i = 0; i < autok.Count; i++)
        {
            if (autok[i].ar > 5000000)
            {
                dragabbdarab++;
            }
        }

        Console.WriteLine("6. 5 milliónál drágább autók száma: " + dragabbdarab);

        Console.ReadLine();
    }
}
