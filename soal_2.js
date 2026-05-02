"use strict";
// NIM = 053253812
// Nama = Farhan Mawardi
/*
Soal 2. Buatlah Deret Aritmatika dengan NIM. Ambil 2 digit terakhir NIM,
jadikan angka awal deret. Ambil digit ke-3 dari belakang, jadikan beda (step).
Buat program TypeScript untuk mencetak 10 angka pertama dari deret aritmatika tersebut.

Contoh: NIM 230411013, 2 digit terakhir = 13,  berarti start dari 13.
digit ke-3 dari belakang + 1 (0 + 1), sehingga beda nya = 1 step.

Output:13, 14, 15, 16, 17, 18, 19, 20, 21, 22
*/
var nim = '053253812';
var start = parseInt(nim.slice(-2));
var step = parseInt(nim.slice(-3, -2)) + 1;
var outputDeret = [];
for (let i = 0; i < 10; i++) {
    outputDeret.push(start + (i * step));
}
console.log('Output: ' + outputDeret.join(', '));
