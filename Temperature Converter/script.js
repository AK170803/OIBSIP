celcius = document.getElementById('celcius');
fahrenheit = document.getElementById('fahrenheit');
celcius.oninput = () =>  {
     output = (parseFloat(celcius.value) * 9 / 5 + 32);
    fahrenheit.value = parseFloat(output.toFixed(2));
};
fahrenheit.oninput = () =>  {
    output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
   celcius.value = parseFloat(output.toFixed(2));
};
