// string
let nama:string = `han`;

// number
let usia: number;
usia = 24;

// boolean
let isWork: boolean;
isWork = true;

// any, 
// tipe data curang, yang bisa masukin tipe data apa aja
// javascript pada umumnya
let tipeDataAcak: any; 

tipeDataAcak = `bakso`; //string
console.log(`string :`, tipeDataAcak);
tipeDataAcak = 7; // number
console.log(`number : `, tipeDataAcak);
tipeDataAcak = [1,2,3,] // bisa array
console.log(`array : `, tipeDataAcak);
tipeDataAcak = {}; // object
console.log(`object : `, tipeDataAcak);
tipeDataAcak = true || false || "string"
console.log(`boolean : `, tipeDataAcak);

console.log(`nama saya ${nama}, usia saya ${usia}, saya sudah kerja adalah ${isWork}`);