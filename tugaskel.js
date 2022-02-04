
//no1
//function school(nama){
    //if (nama == "smk yadika"){
     //   console.log(true);
   // }
   // else {
    //    console.log(false);
  //  }
//}
//school("smk yadika");
//school("yamisa");

//no2
//const number=[10,9,8,7,6,5,4,3,2,1,0]
//const upperNum = number.filter(i1 => {
  //  return i1 <= 10 ;
//})
//console.log(upperNum);

//no3
//function perulangan(mulai, berhenti){
  //for (var i = mulai ; i <= berhenti; i++){
 //   console.log(i);
 // }
//}
//perulangan(0, 10)

//no4
 //const nama = [`caca`, `cici`, `dina`, `dini`, `nonov`]
 //const kelas = `XI RPL 1`

 //console.log(nama[2]);
 //console.log(kelas);

 //no5
 //const number = [150,75,18,27,82];
 //const perkalian = number.map(item => {
  // return item * 10
// })
 //console.log(perkalian);

 //no6
// const number = [150,75,18,27,82];
// const map = number.map(el => {
   //return el / 2
 //})
 //console.log(map);

 //no7
 //const person = [`novia`, `nopia`, `novia`, `novi`, `novia`, `nofia`]
 //function filname () {
 //  const filter = person.filter(el => {
    // return el == `novia`
  // })
  // console.log(filter);
 //}
 //filname()

 //no8
//class kegiatan{
  // constructor(mandi,makan,tidur){
  //   this.Mandi = mandi;
  //   this.Makan = makan;
 //    this.Tidur = tidur;
  // }
//}
 //var kegiatansehari = new kegiatan ("mandi", "makan", "tidur")
 //console.log("mandi", "makan", "tidur");
 //no9
 //var num = Math.floor(Math.random() * 50);
 //console.log(num);

 //no10
 var namakelas= [
   {nama: 'Novia', Kelas: 'XI RPL 1'},
   {nama: 'Fitriani', Kelas: 'XI RPL 2'},
   {nama: 'Kartika', Kelas: 'XI RPL 1'},
   {nama: 'Mega', Kelas: 'XI RPL 1'},
   {nama: 'Salma', Kelas: 'XI RPL 2'},
   {nama: 'Noni', Kelas: 'XI RPL 2'},
   {nama: 'Wita', Kelas: 'XI RPL 1'},
   {nama: 'Nanda', Kelas: 'XI RPL 1'},
   {nama: 'Siti', Kelas: 'XI RPL 2'},
   {nama: 'Salwa', Kelas: 'XI RPL 3'},
 ]
 function seleksi() {
   var filter= namakelas.filter (nama => {
     return nama.Kelas == "XI RPL 1"
   });
   console.log(filter);
 }
 seleksi();