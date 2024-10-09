document.getElementById('selicForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valor = parseFloat(document.getElementById('valor').value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const selic = parseFloat(document.getElementById('selic').value);
    const taxaDiaria = Math.pow(1 + selic / 100, 1 / 252) - 1; 
    const rendimento = valor * Math.pow(1 + taxaDiaria, prazo) - valor;
    
    document.getElementById('resultado').innerText = `Rendimento: R$ ${rendimento.toFixed(2)}`;
  });