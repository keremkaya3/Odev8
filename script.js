let ogrenciAdi = "Kerem Kaya";
let ogrenciNo = 24301021;
let dogumYili = 2007;
let bolum = "Bilgisayar Mühendisliği";
let mezunMu = false;
let notOrtalamasi = 94;

console.log("Adım:" ,ogrenciAdi);
console.log("Numaram:" ,ogrenciNo);
console.log("Doğum Yılım:" ,dogumYili);
console.log("Bölümüm:" ,bolum);
console.log("Mezun mu?:" ,mezunMu);
console.log("Not Ortalamam:" ,notOrtalamasi);

let guncelYil = 2026; 
let yas = guncelYil - dogumYili;
console.log("Yaş:", yas);

if (yas >= 0 && yas <= 6) 
{
    console.log("Bebek / Okul öncesi");
}
 else if (yas >= 7 && yas <= 14)
  {
    console.log("İlköğretim çağı");
}
 else if (yas >= 15 && yas <= 18) 
{
    console.log("Lise çağı");
} 
else if (yas >= 19 && yas <= 25) 
{
    console.log("Üniversite çağı");
}
 else if (yas >= 26 && yas <= 40) 
{
    console.log("Genç yetişkin");
} 
else if (yas >= 41 && yas <= 65) 
{
    console.log("Yetişkin");
} 
else if (yas > 65) 
{
    console.log("Emeklilik çağı");
} 
else 
{
    console.log("Geçersiz yaş değeri");
}

let deger1 = "";
let deger2 = "JavaScript";
let deger3 = 0;
let deger4 = 42;
let deger5 = null;
let deger6 = "0";
let deger7 = [];
let deger8 = {};

console.log("1.Değer:", Boolean(deger1));
console.log("2.Değer:", Boolean(deger2));
console.log("3.Değer:", Boolean(deger3));
console.log("4.Değer:", Boolean(deger4));
console.log("5.Değer:", Boolean(deger5));
console.log("6.Değer:", Boolean(deger6));
console.log("7.Değer:", Boolean(deger7));
console.log("8.Değer:", Boolean(deger8));

let ayNo = 5; 
switch (ayNo) {
    case 1: console.log("Ocak");
    break;
    case 2: console.log("Şubat"); 
    break;
    case 3: console.log("Mart"); 
    break;
    case 4: console.log("Nisan"); 
    break;
    case 5: console.log("Mayıs"); 
    break;
    case 6: console.log("Haziran"); 
    break;
    case 7: console.log("Temmuz"); 
    break;
    case 8: console.log("Ağustos"); 
    break;
    case 9: console.log("Eylül"); 
    break;
    case 10: console.log("Ekim"); 
    break;
    case 11: console.log("Kasım"); 
    break;
    case 12: console.log("Aralık"); 
    break;
    default: console.log("Geçersiz ay numarası");
}