function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var minimumLength =String(angka)+'1';
    minimumLength=minimumLength.length
    var lenOfNum;
    for(var i=0;i<angka;i++){
      if (angka%i===0){
        lenOfNum=String(angka/i)+String(i);
        lenOfNum=lenOfNum.length
        if (minimumLength>lenOfNum){
          minimumLength=lenOfNum
        } 
      }
    }
    return minimumLength
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  console.log(digitPerkalianMinimum(400)); // 3