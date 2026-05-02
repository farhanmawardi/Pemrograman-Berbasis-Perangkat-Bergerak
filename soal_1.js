"use strict";
// NIM = 053253812
// Nama = Farhan Mawardi
/*
Soal 1. Buatlah Pola Segitiga dari NIM, Ambil digit terakhir NIM Anda sebagai tinggi segitiga.
Contoh: NIM 230411013  (digit terakhir = 3,  tinggi segitiga = 3).
Buat program TypeScript untuk mencetak segitiga angka dengan pola berikut:

1
1 2
1 2 3

Jika tinggi segitiga = 5, maka baris terakhir menampilkan angka 1 sampai 5, dan seterusnya.
*/
var nim = '053253812';
var tinggi = parseInt(nim.slice(-1));
for (let i = 1; i <= tinggi; i++) {
    var baris = '';
    for (let j = 1; j <= i; j++) {
        baris += j + ' ';
    }
    console.log(baris);
}
