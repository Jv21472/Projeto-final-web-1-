const funcionarios = [];
const maxFuncionarios = 10;

document.getElementById('funcionarioForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (funcionarios.length >= maxFuncionarios) {
    alert('Máximo de 10 funcionários atingidos!');
    return;
  }

  const nome = document.getElementById('nome').value;
  const salarioBase = parseFloat(document.getElementById('salarioBase').value);
  const he = parseFloat(document.getElementById('he').value);
  const insalubridadePercent = parseFloat(document.getElementById('insalubridade').value);
  const periculosidadePercent = parseFloat(document.getElementById('periculosidade').value);
  const inss = parseFloat(document.getElementById('inss').value);
  const irpf = parseFloat(document.getElementById('irpf').value);
  const vt = parseFloat(document.getElementById('vt').value);
  const insalubridade = (salarioBase * insalubridadePercent) / 100;
  const periculosidade = (salarioBase * periculosidadePercent) / 100;
  const total = salarioBase + he + insalubridade + periculosidade - inss - irpf - vt;

  funcionarios.push({ nome, salarioBase, he, insalubridade, periculosidade, inss, irpf, vt, total });

  const tabela = document.querySelector('#tabelaFuncionarios tbody');
  const novaLinha = tabela.insertRow();
  novaLinha.insertCell(0).innerText = nome;
  novaLinha.insertCell(1).innerText = salarioBase.toFixed(2);
  novaLinha.insertCell(2).innerText = he.toFixed(2);
  novaLinha.insertCell(3).innerText = insalubridade.toFixed(2);
  novaLinha.insertCell(4).innerText = periculosidade.toFixed(2);
  novaLinha.insertCell(5).innerText = inss.toFixed(2);
  novaLinha.insertCell(6).innerText = irpf.toFixed(2);
  novaLinha.insertCell(7).innerText = vt.toFixed(2);
  novaLinha.insertCell(8).innerText = total.toFixed(2);

  document.getElementById('nome').value = '';
  document.getElementById('salarioBase').value = '';
  document.getElementById('he').value = '';
  document.getElementById('insalubridade').value = '';
  document.getElementById('periculosidade').value = '';
  document.getElementById('inss').value = '';
  document.getElementById('irpf').value = '';
  document.getElementById('vt').value = '';
  atualizarTotais();
});

function atualizarTotais() {
  const totais = {
    salarioBase: 0,
    he: 0,
    insalubridade: 0,
    periculosidade: 0,
    inss: 0,
    irpf: 0,
    vt: 0,
    total: 0
  };

  funcionarios.forEach(funcionario => {
    totais.salarioBase += funcionario.salarioBase;
    totais.he += funcionario.he;
    totais.insalubridade += funcionario.insalubridade;
    totais.periculosidade += funcionario.periculosidade;
    totais.inss += funcionario.inss;
    totais.irpf += funcionario.irpf;
    totais.vt += funcionario.vt;
    totais.total += funcionario.total;
  });

  document.getElementById('totais').innerText = 
    `Totais: Salário Base - R$ ${totais.salarioBase.toFixed(2)} 
    | HE - R$ ${totais.he.toFixed(2)} 
    | Insalubridade - R$ ${totais.insalubridade.toFixed(2)} 
    | Periculosidade - R$ ${totais.periculosidade.toFixed(2)} 
    | INSS - R$ ${totais.inss.toFixed(2)} 
    | IRPF - R$ ${totais.irpf.toFixed(2)} 
    | VT - R$ ${totais.vt.toFixed(2)} 
    | Total Final - R$ ${totais.total.toFixed(2)}`;
}

