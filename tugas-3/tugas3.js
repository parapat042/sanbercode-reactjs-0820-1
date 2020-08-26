// Soal 1 
var kataPertama = "saya" // Tipe
var kataKedua = "senang"
var kataKetiga = "belajar"
var kataKeempat = "JAVASCRIPT"  

console.log(kataPertama + kataKedua + kataKetiga + kataKeempat) // 






// Soal 2 
var kataPertama = 1 // Tipe
var kataKedua = 2
var kataKetiga = 4
var kataKeempat = 5  

console.log(kataPertama+kataKedua+kataKetiga+kataKeempat) // 



// Soal 3 
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga= kalimat.substring(15, 18); 
var kataKeempat= kalimat.substring(19,24); 
var kataKelima=kalimat.substring(25, 31); 


console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4 
var angka=75;
  
if (angka>=80)
{
   console.log("A");
}
else if (angka>=70 && angka <80)
{
   console.log("B");
}
else if (angka>60 && angka <70)
{
   console.log("C");
}
else if (angka>=50 && angka < 60)
{
   console.log("D");
}
else 
{
    console.log("E")
}

// Soal 5
var tanggal = 22;
var bulan = 7;
var tahun = 2020;

switch(bulan) {
  case 1: { console.log(tanggal + ' Januari ' + tahun); 
  break; }
  case 2: { console.log(tanggal + ' Februari ' + tahun); 
  break; }
  case 3: { console.log(tanggal + ' Maret ' + tahun); 
  break; }
  case 4: { console.log(tanggal + ' April ' + tahun); 
  break; }
  case 5: { console.log(tanggal + ' Mei ' + tahun);
   break; }
  case 6: { console.log(tanggal + ' Juni ' + tahun); 
  break; }  
  case 7: { console.log(tanggal + ' Juli ' + tahun); 
  break; }
  case 8: { console.log(tanggal + ' Agustus ' + tahun); 
  break; }
  case 9: { console.log(tanggal + ' September ' + tahun); 
  break; }
  case 10: { console.log(tanggal + ' Oktober ' + tahun);
   break; }
  case 11: { console.log(tanggal + ' November ' + tahun); 
  break; }
  case 12: { console.log(tanggal + ' Desember ' + tahun); 
  break; }
  default : { console.log('Bulan tidak tersedia'); }
}

// dst
