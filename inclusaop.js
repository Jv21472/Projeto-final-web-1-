const pessoas = [];
const maxPessoas = 10;

document.getElementById('pessoaForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);

  if (pessoas.length >= maxPessoas) {
    alert('Máximo de 10 pessoas atingidos!');
    return;
  }

  pessoas.push({ nome, altura, peso });

  const tabela = document.querySelector('#tabelaPessoas tbody');
  const novaLinha = tabela.insertRow();
  novaLinha.insertCell(0).innerText = nome;
  novaLinha.insertCell(1).innerText = altura.toFixed(2);
  novaLinha.insertCell(2).innerText = peso.toFixed(1);

  document.getElementById('nome').value = '';
  document.getElementById('altura').value = '';
  document.getElementById('peso').value = '';

  atualizarMedias();
});

function atualizarMedias() {
  const totalAltura = pessoas.reduce((acc, pessoa) => acc + pessoa.altura, 0);
  const totalPeso = pessoas.reduce((acc, pessoa) => acc + pessoa.peso, 0);

  const mediaAltura = totalAltura / pessoas.length;
  const mediaPeso = totalPeso / pessoas.length;

  document.getElementById('medias').innerText = 
    `Média de Altura: ${mediaAltura.toFixed(2)} m | Média de Peso: ${mediaPeso.toFixed(1)} kg`;
}
