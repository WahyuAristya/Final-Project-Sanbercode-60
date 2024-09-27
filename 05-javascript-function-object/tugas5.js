//Soal 1 ( Membuat Function dengan return String )
console.log("Jawaban soal 1 :");

function cetakFunction() {
    return "Hallo Nama Saya Wahyu Aristya";
}

console.log(cetakFunction());



//Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya )
console.log("\n");
console.log("Jawaban soal 2 :");

function myFunction(){
    return angka1 + angka2;
}

let angka1 = 20;
let angka2 = 7;

let output = myFunction();

console.log(output);



//Soal 3 ( Mengubah dalam bentuk arrow function )
console.log("\n");
console.log("Jawaban soal 3 :");

const Hello = () => {
    return "Hello";
}

console.log(Hello());



//soal 4 ( Memanggil key dalam sebuah object )
console.log("\n");
console.log("Jawaban soal 4 :");

let obj = {
    nama : "John",
    umur : 22,
    bahasa : "Indonesia"
}

console.log(obj.bahasa);



//soal 5 ( mengubah array menjadi object )
console.log("\n");
console.log("Jawaban soal 5 :");

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objectDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenisKelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}

console.log(objectDaftarPeserta);



//soal 6( Membuat sebuah array of object dan melakukan filter )
console.log("\n");
console.log("Jawaban soal 6 :");

var buah = [
    {
        nama : "Nanas",
        warna : "Kuning",
        adaBijinya : "false",
        harga : 9000
    },
    {
        nama : "Jeruk",
        warna : "Oranye",
        adaBijinya : "true",
        harga : 8000
    },
    {
        nama : "Semangka",
        warna : "Hijau & Merah",
        adaBijinya : "true",
        harga : 10000
    },
    {
        nama : "Pisang",
        warna : "Kuning",
        adaBijinya : "false",
        harga : 5000
    }
]

var buahFilter = buah.filter(function(item){
    return item.adaBijinya === "false";
})

console.log(buahFilter);



//Soal 7 ( Destructuring pada Object )
console.log("\n");
console.log("Jawaban soal 7 :");

let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
 }

const {name, brand, year} = phone

console.log(name, brand, year)



//soal 8 ( Spred Operator pada Object )
console.log("\n");
console.log("Jawaban soal 8 :");

let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
}

let objOutput = {}

let newObjOutput = {...dataBukuTambahan, ...buku}
objOutput = newObjOutput

console.log(objOutput)



//soal 9 ( Penggunaan Function dan Object )
console.log("\n");
console.log("Jawaban soal 9 :");

let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
}

const functionObject = (param) => {
    return param
}

console.log(functionObject(mobil))