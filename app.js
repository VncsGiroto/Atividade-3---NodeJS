const express = require("express");
const professorRoutes = require("./routes/professorRoutes");

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Registro das rotas de professores
app.use("/professores", professorRoutes);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;
