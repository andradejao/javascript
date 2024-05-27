document.getElementById('autonomyForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const capacity = parseFloat(document.getElementById('capacity').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
   
    if (isNaN(capacity) || isNaN(consumption) || capacity <= 0 || consumption <= 0) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
        return;
    }
   
    const autonomy = capacity * consumption;
    document.getElementById('result').innerText = `A autonomia do carro é de ${autonomy.toFixed(2)} km.`;
});