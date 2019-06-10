function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var root=Math.sqrt(angka)
    var result="";
    
    if (root%1===0){
      result=String(root)+String(root);
      return result.length
    }
    else {
      for (var i=Math.floor(root);i>=1;i--){
        if (angka%i===0){
          result=String(i)+String(angka/i)
          return result.length;
        }
      }
    }
    
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  console.log(digitPerkalianMinimum(400)); // 2