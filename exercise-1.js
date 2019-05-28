function angkaPrima(angka) {
  // you can only write your code here!
  const prima = [2, 3, 5, 7];
  if (prima.includes(angka)) {
    return true
  }
  else {
    for (var i = 0; i < prima.length; i++) {
      if (angka % prima[i] === 0) {
        return false
      }
    }
    return true
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false