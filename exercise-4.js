function cariModus(arr) {
  // you can only write your code here!
  var dict = {};
  var max = 0;

  for (let num of arr) { //Membuat object literal dengan angka beserta frekuensi munculnya
    if (num in dict) {
      dict[num] += 1
    }
    else {
      dict[num] = 1
    }
  }
  var values = Object.values(dict);
  var unique = [...new Set(values)]; // membuat array dengan nilai frekuensi unik 

  if (Object.keys(dict).length == 1 || unique.length === 1) { //fungsi akan return -1 apabila  modus tidak ditemukan dan array hanya terdiri dari satu angka
    return -1;
  }

  for (let number in dict) {
    if (dict[number] > max) {
      max = dict[number]
      var modus = number;
    }
  }
  return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1*/
