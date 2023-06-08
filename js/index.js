let gambar = document.querySelector('.hero');
let welcome = document.querySelector('.welcome');
let nama = document.querySelector('.nama');
let tgl = document.querySelector('.tgl');
let input = document.querySelector('.inputarea');
let output = document.querySelector('.output');



  let user = prompt('Masukkan nama anda: ');
 if(user.length < 1){
   user = 'User';
 }
  welcome.innerHTML = user;
  


setInterval(function(){
  gambar.classList.toggle('shaft');
}, 2500);


function send(){
  var radioButtonGroup = document.getElementsByName("gender");
            var checkedRadio = Array.from(radioButtonGroup).find(
               (radio) => radio.checked
            );
            
            if(nama.value == "" || tgl.value == "" || checkedRadio.value == "" || input.value == ""){
              alert('Data wajib di isi semua!!!');
              nama, tgl, checkedRadio, input;
            }
  
  output.innerHTML += 
  
  'NAMA: ' + nama.value + '<br>' +
  'Tanggal lahir: ' + tgl.value + '<br>' +
  'Jenis kelamin: ' + checkedRadio.value + '<br>' +
  'Pesan: ' + input.value + '<br>';
}