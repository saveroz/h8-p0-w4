function changeMe(arr) {
    // you can only write your code here!
    var num=1;
    for (let person of arr){
      
      var biodata={
        firstName:person[0],
        lastName:person[1],
        gender:person[2],
        age:person[3] && person[3] < 2019 ? 2019-person[3] :'Invalid Birth Year'
      }
      console.log(`${num}. ${person[0]} ${person[1]}:`)
      console.log(biodata);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""