function fpb(angka1, angka2) {
   // you can only write your code here!
   let greaterNum = angka1;
   let lessNum = angka2;

   if (angka1 === angka2) {
      return angka1;
   }
   else if (angka1 > angka2) {
      greaterNum = angka1;
      lessNum = angka2;
   }
   else {
      greaterNum = angka2;
      lessNum = angka1;
   }

   while (greaterNum % lessNum !== 0) {
      NUM = lessNum;
      lessNum = greaterNum % lessNum
      greaterNum = NUM;
   }
   return lessNum;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1*/
