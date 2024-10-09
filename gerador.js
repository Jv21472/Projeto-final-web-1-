document.getElementById('gerarBtn').addEventListener('click', function() {
    const numeros = gerarNumeros();
    document.getElementById('resultado').innerText = `Números: ${numeros.join(', ')}`;
  });
  
  function gerarNumeros() {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1; 
      if (!numeros.includes(numero)) { 
        numeros.push(numero);
      }
    }
    return numeros.sort((a, b) => a - b);
  }
  