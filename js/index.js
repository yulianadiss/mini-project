// var berat = document.getElementById("berat-badan");
// var usia = document.getElementById("usia");
// var tinggi = document.getElementById("tinggi-badan");
// // var pria = document.getElementById("pria");
// // var wanita = document.getElementById("wanita");

// var hitung = document.getElementById("hitung");

// hitung.addEventListener('click', function(){
//     weight = berat.value;
//     height = tinggi.value;
//     var hasil = (weight / (height * height) * 10000);
//     document.getElementById('hasil-bmi').value = hasil;

// })

var hitung = document.querySelector('#hitung');

hitung.addEventListener('click', function() {
    var age = document.querySelector('#usia').value;
    var height = document.querySelector('#tinggi-badan').value;
    var weight = document.querySelector('#berat-badan').value;
      // check height & weight are a valid number
      if (age <= 0 || height <= 0 || weight <= 0 || isNaN(age) || isNaN(height) || isNaN(weight)) {
        alert('Please fill all fields with valid numbers');
        return;
      }
    // convert height to meters
    height = height / 100;
    var bmi = weight / (height * height);
    showResult(bmi);
    document.getElementById('hasil-bmi').value = bmi.toFixed(2);
});

function showResult(bmi){
    var statement = document.getElementById('statement');
    var bmiStatus;
    var bmiHasil;
    if (bmi < 18.5) {
        bmiHasil = 'Berat badan kurang'
        bmiStatus = 'kekurangan berat badan';
      } else if (bmi < 25) {
        bmiHasil = 'Berat badan normal'
        bmiStatus = 'memiliki berat badan normal';
      } else if (bmi < 30) {
        bmiHasil = 'Berat badan lebih'
        bmiStatus = 'kelebihan berat badan';
      } else {
        bmiHasil = 'Berat badan kegemukan'
        bmiStatus = 'kegemukan (obesitas)';
      }
      statement.innerHTML = `
      <div class=${bmiHasil} style="font-size: 1.2rem;">${bmiHasil}</div>
      <input style="background-color: rgb(229, 229, 229); text-align: center; color: blue; font-size: 20px; border : none" id="hasil-bmi" value="0" size="10" disabled="">
      <div class=${bmiStatus}> Anda ${bmiStatus}</div>`;
    }
