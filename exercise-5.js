function ubahHuruf(kata) {
  // you can only write your code here!
  var finalWords="";
  var num=0;
  for (let letter of kata){
    num=letter.charCodeAt();
    finalWords+=String.fromCharCode(num+1)
  }
  return finalWords;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

