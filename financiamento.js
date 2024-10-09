document.getElementById('financiamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const valor = parseFloat(document.getElementById('valor').value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const juros = parseFloat(document.getElementById('juros').value) / 100;
    const prestacao = (valor * juros * Math.pow(1 + juros, prazo)) / (Math.pow(1 + juros, prazo) - 1);

    document.getElementById('resultado').innerText = `Valor da Prestação: R$ ${prestacao.toFixed(2)}`;
  });
  