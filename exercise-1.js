function angkaPrima(angka) {
  // you can only write your code here!
  for (var i = 2; i < Math.floor(angka); i++) {
      if (angka % i=== 0) {
        return false
      }
    }
    return true
  }
// TEST CASES
console.log(angkaPrima(2)); // true
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(121)); // false
