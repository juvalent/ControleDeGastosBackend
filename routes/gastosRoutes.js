const express = require('express');
const router = express.Router();

const {
    listarGastos,
    buscarGasto,
    criarGasto,
    atualizarGasto,
    deletarGasto,
    totalGastos
} = require('../controllers/gastoController');

router.get('/', listarGastos);


router.get('/total', totalGastos);

router.get('/:id', buscarGasto);

router.post('/', criarGasto);

router.put('/:id', atualizarGasto);

router.delete('/:id', deletarGasto);

module.exports = router;