document.getElementById('simulacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const valorMensal = parseFloat(document.getElementById('valorMensal').value);
    const taxaRendimento = parseFloat(document.getElementById('taxaRendimento').value) / 100;
  
    const objetivo = 1000000; // Meta de 1 milhão de reais
    let saldo = 0;
    let meses = 0;
  
    // Cálculo mês a mês
    while (saldo < objetivo) {
      saldo += valorMensal;
      saldo += saldo * taxaRendimento; // Rendimento aplicado sobre o saldo
      meses++;
    }
  
    // Converte o tempo de meses para anos e meses
    const anos = Math.floor(meses / 12);
    const mesesRestantes = meses % 12;
  
    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Você levará ${anos} anos e ${mesesRestantes} meses para juntar R$ 1 milhão.`;
  });
  