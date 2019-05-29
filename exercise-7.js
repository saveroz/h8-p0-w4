function urutkanAbjad(str) {
    // you can only write your code here!
    var sortLetter=str.split("");
    sortLetter=sortLetter.sort();
    sortLetter=sortLetter.join(""); 
    
    return sortLetter
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'