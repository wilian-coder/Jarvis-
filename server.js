const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota para todas as requisições (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor J.A.R.V.I.S. rodando em http://localhost:${port}`);
});