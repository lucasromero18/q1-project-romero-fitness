function bmiCalc () {

  let heightFeet = parseFloat(document.querySelector("#height-input-ft").value);
  let heightInches = parseFloat(document.querySelector("#height-input-inches").value)
  let weight = parseFloat(document.querySelector("#weight-input").value)
  let bmiRes = document.querySelector(".answer");

  heightInches += heightFeet * 12;

  let totalCM = heightInches * 2.54;
  let totalKG = weight/2.205;

  let totalM = totalCM/100;

  let resultHTwo = document.querySelector('.bmi-results');

  resultHTwo.textContent = (totalKG/(totalM*totalM)).toFixed(1);
}
