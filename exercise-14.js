function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var listPenumpang=[]
    for (let person of arrPenumpang){
        var PassengerDetail={};
        PassengerDetail['penumpang']=person[0]
        PassengerDetail['naikDari']=person[1]
        PassengerDetail['tujuan']=person[2]
        PassengerDetail['bayar']=Math.abs((rute.indexOf(person[2])-rute.indexOf(person[1])))*2000;
        listPenumpang.push(PassengerDetail);
    }
    return listPenumpang
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

  console.log(naikAngkot([])); //[]