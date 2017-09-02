// IMPORTADO DA DOCUMETACAO DO NODEJS:
const http = require('http');

// Create an HTTP server - CRIANDO O PORTEIRO QUE VAI ADM AS PORTAS
const srv = http.createServer((req, res) => {
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  // CHAMA O METODO end PORQUE EH A ULTIMA COISA QUE O SERVIDOR FEZ ANTES DEVOLVER A INFORMACAO PARA O CLIENT
  res.end('chegou aqui!')
  //res.end('okay');
});

// AQUI EU ESTOU DIZENDO QUAL PORTA O PORTEIRO VAI ATENDER, E ABRINDO:
srv.listen(8080);
// QUANDO EU DIGO ISSO, QUALQUER COISA QUE BATER NESSA PORTA SERA CUIDADA POR ESSE SERVIDOR CRIADO ACIMA;
