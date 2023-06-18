document.getElementById("temperatureForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var temperature = parseFloat(document.getElementById("temperature").value);
  var unit = document.getElementById("unit").value;
  var resultText = "";

  if (unit === "celcius") {
    var fahrenheit = (temperature * 9/5) + 32;
    resultText = temperature + " Celcius = " + fahrenheit + " Fahrenheit";
  } else if (unit === "fahrenheit") {
    var celcius = (temperature - 32) * 5/9;
    resultText = temperature + " Fahrenheit = " + celcius + " Celcius";
  }

  document.getElementById("result").textContent = resultText;
});
