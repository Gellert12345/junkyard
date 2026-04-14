using System;
using System.IO;

namespace Kongresszus
{
   
    struct Eloadas
    {
        public string eloado;
        public int nap;
        public int sorszam;
        public int perc;
        public string cim;
        public string eszkoz;
    }

    class Program
    {
        
        static Eloadas[] eloadasok = new Eloadas[200];
        static int db = 0;

        static void Main()
        {
          
            string[] sorok = File.ReadAllLines("eloadasok.txt");
            for (int i = 0; i < sorok.Length; i++)
            {
                string[] darabok = sorok[i].Split('\t');
                eloadasok[db].eloado = darabok[0];
                eloadasok[db].nap = int.Parse(darabok[2]);
                eloadasok[db].sorszam = int.Parse(darabok[3]);
                eloadasok[db].perc = int.Parse(darabok[4]);
                eloadasok[db].cim = darabok[5];
                eloadasok[db].eszkoz = darabok[6];
                db++;
            }

  
            Console.WriteLine("2. feladat:");
            for (int n = 5; n <= 8; n++)
            {
                Console.WriteLine("november " + n + ".:");
             
                for (int s = 1; s <= 20; s++) 
                {
                    for (int i = 0; i < db; i++)
                    {
                        if (eloadasok[i].nap == n && eloadasok[i].sorszam == s)
                        {
                            Console.WriteLine(" " + s + ". " + eloadasok[i].eloado + ": " + eloadasok[i].cim);
                        }
                    }
                }
            }

            // 3. feladat: Napi összes idő
            Console.WriteLine("\n3. feladat:");
            for (int n = 5; n <= 8; n++)
            {
                int ossz = 0;
                for (int i = 0; i < db; i++)
                {
                    if (eloadasok[i].nap == n) ossz += eloadasok[i].perc;
                }
                Console.WriteLine((n - 4) + ". nap: " + (ossz / 60) + ":" + (ossz % 60).ToString("00"));
            }

            // 4. feladat: Leghosszabb nov. 6-án
            Console.WriteLine("\n4. feladat:");
            int max = 0;
            for (int i = 0; i < db; i++)
            {
                if (eloadasok[i].nap == 6 && eloadasok[i].perc > max) max = eloadasok[i].perc;
            }
            for (int i = 0; i < db; i++)
            {
                if (eloadasok[i].nap == 6 && eloadasok[i].perc == max)
                {
                    Console.WriteLine(eloadasok[i].eloado + " " + eloadasok[i].perc);
                }
            }

            // 5-9. feladatok logikája (időpont számítás DateTime nélkül)
            // A könnyebb kezelhetőség kedvéért percekben számolunk a nap kezdetétől (8:00 = 480 perc)
            
            StreamWriter sw = new StreamWriter("idorend.txt");
            for (int n = 5; n <= 8; n++)
            {
                sw.WriteLine("november " + n + ".");
                int jelenlegiIdo = 8 * 60; // 480 perc
                bool ebedVolt = false;

                for (int s = 1; s <= 20; s++)
                {
                    for (int i = 0; i < db; i++)
                    {
                        if (eloadasok[i].nap == n && eloadasok[i].sorszam == s)
                        {
                            // Előadás kezdete és vége
                            int k = jelenlegiIdo;
                            int v = k + eloadasok[i].perc;
                            sw.WriteLine(PercToOra(k) + "-" + PercToOra(v) + " " + eloadasok[i].eloado + ": " + eloadasok[i].cim + " (" + eloadasok[i].eszkoz + ")");
                            
                            // Vita
                            k = v;
                            v = k + 20;
                            sw.WriteLine(PercToOra(k) + "-" + PercToOra(v) + " Vita");
                            
                            jelenlegiIdo = v;

                            // Ebédszünet ellenőrzése (ha elmúlt dél, azaz 12:00 = 720 perc)
                            if (!ebedVolt && jelenlegiIdo >= 12 * 60)
                            {
                                sw.WriteLine(PercToOra(jelenlegiIdo) + "-" + PercToOra(jelenlegiIdo + 60) + " Ebéd");
                                jelenlegiIdo += 60;
                                ebedVolt = true;
                            }
                        }
                    }
                }
                if (n == 5) Console.WriteLine("\n5. feladat: november 5.: " + PercToOra(jelenlegiIdo));
            }
            sw.Close();
            
            Console.WriteLine("\n9. feladat: idorend.txt elkészült.");
        }

        // Segédfüggvény a percek formázásához (pl. 500 -> 8:20)
        static string PercToOra(int p)
        {
            return (p / 60) + ":" + (p % 60).ToString("00");
        }
    }
}