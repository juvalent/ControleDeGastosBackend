const express = require('express');

const usuarioRoutes = require('./routes/usuarioRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const gastoRoutes = require('./routes/gastosRoutes');

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/gastos', gastoRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});