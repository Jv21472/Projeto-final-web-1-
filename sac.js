document.getElementById('financiamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const valorFinanciado = parseFloat(document.getElementById('valorFinanciado').value);
    const prazo = parseInt(document.getElementById('prazo').value);
    const taxaJurosAnual = parseFloat(document.getElementById('taxaJuros').value);
    const taxaJurosMensal = (taxaJurosAnual / 100) / 12;
    const amortizacaoConstante = valorFinanciado / prazo;
    const tabela = document.querySelector('#tabelaSimulacao tbody');
    tabela.innerHTML = '';
  
    let saldoDevedor = valorFinanciado;
    let totalJuros = 0;
    let totalParcelas = 0;
  
    for (let mes = 1; mes <= prazo; mes++) {
      const juros = saldoDevedor * taxaJurosMensal;
      const parcela = amortizacaoConstante + juros;

      totalJuros += juros;
      totalParcelas += parcela;

      const novaLinha = tabela.insertRow();
      novaLinha.insertCell(0).innerText = mes;
      novaLinha.insertCell(1).innerText = amortizacaoConstante.toFixed(2);
      novaLinha.insertCell(2).innerText = juros.toFixed(2);
      novaLinha.insertCell(3).innerText = parcela.toFixed(2);
      novaLinha.insertCell(4).innerText = saldoDevedor.toFixed(2);

      saldoDevedor -= amortizacaoConstante;
    }

    const totalLinha = tabela.insertRow();
    totalLinha.insertCell(0).innerText = 'Totais';
    totalLinha.insertCell(1).innerText = '-';
    totalLinha.insertCell(2).innerText = totalJuros.toFixed(2);
    totalLinha.insertCell(3).innerText = totalParcelas.toFixed(2);
    totalLinha.insertCell(4).innerText = '-';
  });
  