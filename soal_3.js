"use strict";
// NIM = 053253812
// Nama = Farhan Mawardi
/*
Soal 3. Buatlah Bilangan Prima dari NIM. Ambil 2 digit terakhir NIM dan
tambahkan 10, jadikan batas akhir pencarian bilangan prima. Buat program
TypeScript untuk menampilkan semua bilangan prima dari 1 sampai batas tersebut.

Contoh: NIM 230411013, 2 digit terakhir  yaitu 13 ditambah 10, sehingga menjadi 23 (batas akhir)

Output: 2, 3, 5, 7, 11, 13, 17, 19, 23
*/
var nim = '053253812';
var end = parseInt(nim.slice(-2)) + 10;
function cekBilanganPrima(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
var outputPrima = [];
for (let i = 2; i <= end; i++) {
    if (cekBilanganPrima(i)) {
        outputPrima.push(i);
    }
}
console.log('Output: ' + outputPrima.join(', '));
