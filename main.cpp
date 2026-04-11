#include <iostream> //import input output
//std =>, cout => character output, int => teljes szám nem tizedes vagy stb
int newMain(); //előre deklarájuk és csak utanna hivhatjuk meg

int main() {
    int file_size = 100;
    // több változaot tudzs létrhezoni 1 sorba =>
    int file_number = 0, counter = 0;
    double sales = 9.99;
    std::cout << "Hello Word";
    std::cout << file_size;
    newMain();
    return 0;
}

int newMain() {
    //felcseréljük a váltok értéketit
    int a = 1;
    int b = 2;
    int temp = a;
    a = b;
    b = temp;
    std::cout << a;
    return 0;
}