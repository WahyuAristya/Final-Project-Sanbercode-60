//Soal 1 (Membuat Looping Sederhana)
console.log("Jawaban soal 1 :");

for(var i = 0; i<10; i++){
    console.log(i);
}



//Soal 2 (Membuat Looping dengan conditional angka ganjil)
console.log("\n");
console.log("Jawaban soal 2 :");

for(var i = 0; i<10; i++){
    if(i%2 == 1){
        console.log(i);
    }
}



//Soal 3 (Membuat Looping dengan conditional angka genap)
console.log("\n");
console.log("Jawaban soal 3 :");

for(var i=0; i<10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}



//Soal 4 (Mengakses element array)
console.log("\n");
console.log("Jawaban soal 4 :");

let array1 = [1,2,3,4,5,6]
console.log(array1[5]);



//Soal 5 (Mengurutkan element array)
console.log("\n");
console.log("Jawaban soal 5 :");

let array2 = [5,2,4,1,3,5]
array2.sort();
console.log(array2);



//Soal 6 (Mengeluarkan element array)
console.log("\n");
console.log("Jawaban soal 6 :");

let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for(i=0; i<array3.length; i++){
    console.log(array3[i]);
}



//Soal 7 (Mengeluarkan element array dan dengan kondisi)
console.log("\n");
console.log("Jawaban soal 7 :");

let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for(i=0; i<array4.length; i++){
    if(array4[i]%2 == 0){
        console.log(array4[i]);
    }
}



//Soal 8 (Menggabungkan element menjadi string)
console.log("\n");
console.log("Jawaban soal 8 :");

let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
let kalimatGabung = kalimat.join(" ");
console.log(kalimatGabung);



//Soal 9 (Menambahkan element array)
console.log("\n");
console.log("Jawaban soal 9 :");

var sayuran=[]
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");
console.log(sayuran);