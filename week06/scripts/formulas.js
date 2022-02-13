/* CSE 121B: Lesson 6 
Final Project: Jon Lanenga 
*/

//EIRP//
//Function to calculate EIRP//
function math(number1, number2, number3) {
  return number1 - number2 + number3;
}
function eirp() {
  let tx_power = parseInt(document.querySelector("#tx_power").value);
  let line_loss = parseInt(document.querySelector("#line_loss").value);
  let antenna_gain = parseInt(document.querySelector("#antenna_gain").value);
  let result = math(tx_power, line_loss, antenna_gain);

  document.querySelector("#total_eirp").value = result;
}
document.querySelector("#calculateEIRP").addEventListener("click", eirp);

// Radio Line of Sight //
function mathLOS(number1) {
  return Math.sqrt(number1) * 3.57;
}
function mathRadioHorizon(number1) {
  return Math.sqrt(number1) * 4.12;
}
function LOS() {
  let antenna_height = parseInt(
    document.querySelector("#antenna_height").value
  );
  let result = mathLOS(antenna_height);
  let result2 = mathRadioHorizon(antenna_height);

  document.querySelector("#radio_los").value = result;
  document.querySelector("#radio_horizon").value = result2;
}
document.querySelector("#calculate_LOS").addEventListener("click", LOS);

//Power Conversion//

function ConvertDBmtoWatts(number1) {
  return (p = (1 * Math.pow(10, number1 / 10)) / 1000);
}

function power() {
  let power_input = parseInt(document.querySelector("#power_input").value);
  let result = ConvertDBmtoWatts(power_input);

  document.querySelector("#power_watts").value = result;
}
document.querySelector("#calculate_power").addEventListener("click", power);

function calculateRange() {
  var freqMHz = parseFloat(document.getElementById("freqghz").value) * 1e3; // convert from GHz to MHz
  var txPower = parseFloat(document.getElementById("txdbm").value);
  var txAntGain = parseFloat(document.getElementById("txantgain").value);
  var rxAntGain = parseFloat(document.getElementById("rxantgain").value);
  var rxSens = parseFloat(document.getElementById("rxsens").value);
  var linkMargin = parseFloat(document.getElementById("linkmargin").value);

  var fspl = txPower + txAntGain + rxAntGain;
  fspl = fspl - (rxSens + linkMargin);

  var distancekm = Math.pow(10, (fspl - 32.45 - 20 * Math.log10(freqMHz)) / 20);

  distancekm = distancekm.toFixed(2);

  document.getElementById("rangekm").value = distancekm;
}

document
  .querySelector("#EstimateRange")
  .addEventListener("click", calculateRange);
