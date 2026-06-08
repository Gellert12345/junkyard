public class main {
	
	public static void main (String[] args) {
		// javac main.java => compile
		// java main => run
		System.out.println("Mukodik");
		int a = 2;
		int b = 4;
		System.out.println(a+b);
		byte by = 12;
		long l = 12312321323l;
		float f = 5.8f;
		char c = 'k';
		int binaryformat = 0b101;
		//tudsz _ rakni szamok koze es nem fog  szamitani
		double num1 = 10_00000_00;
		System.out.println(num1);
		for(int i=0;i < 10; i++) {
			System.out.println("az i erteke =" + i);
			
		}
		char masbetulesz = 'a';
		masbetulesz++;
		System.out.println(masbetulesz); // a=> b
		boolean igaz = true;
		while(igaz) {
			System.out.println("while ciklus");
			igaz = false;
			}
			function1();
		
	}
	public static void function1 () {
		System.out.println("ez mar egy masik function");
		
		int a = 12;
		byte k = (byte) a; // int 32bit byte 8bit vagyis a 12 az tzarolhatjuk kissebb meretbe
		System.out.println(k);
		int num1 = 2;
		int num2 = 3;
		int result = num1 * num2;
		int result2 =  num1 % num2; //devide
		System.out.println("Result" + result + "Result2" + result2);
		//uj function-be hasznalhatod ugyan az a variable nevet!!!
		for (int i = 0; i < 3; i++) {
			System.out.println("Hajra zte 3szor");
			}
		//while ciklus(kivul hozzuk letre a vltozoot)
		int whilei = 1;
	
		while(whilei <= 4) {
			System.out.println("while ciklus szamok:" + whilei);
			whilei++;
			}
		
		}
		
		
}

