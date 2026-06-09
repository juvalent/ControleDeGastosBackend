const db = require('../database/db');


const listarGastos = (req, res) => {
    const gastos = db.prepare(`
        SELECT
            g.id,
            g.descricao,
            g.valor,
            g.data_gasto,
            u.nome AS usuario,
            c.nome AS categoria
        FROM gastos g
        LEFT JOIN usuarios u
            ON g.usuario_id = u.id
        LEFT JOIN categorias c
            ON g.categoria_id = c.id
    `).all();

    res.json(gastos);
};


const buscarGasto = (req, res) => {
    const gasto = db.prepare(`
        SELECT *
        FROM gastos
        WHERE id = ?
    `).get(req.params.id);

    if (!gasto) {
        return res.status(404).json({
            mensagem: 'Gasto não encontrado'
        });
    }

    res.json(gasto);
};


const criarGasto = (req, res) => {
    const {
        descricao,
        valor,
        data_gasto,
        usuario_id,
        categoria_id
    } = req.body;

    const resultado = db.prepare(`
        INSERT INTO gastos
        (
            descricao,
            valor,
            data_gasto,
            usuario_id,
            categoria_id
        )
        VALUES (?, ?, ?, ?, ?)
    `).run(
        descricao,
        valor,
        data_gasto,
        usuario_id,
        categoria_id
    );

    res.status(201).json({
        mensagem: 'Gasto cadastrado com sucesso',
        id: resultado.lastInsertRowid
    });
};


const atualizarGasto = (req, res) => {
    const {
        descricao,
        valor,
        data_gasto,
        usuario_id,
        categoria_id
    } = req.body;

    db.prepare(`
        UPDATE gastos
        SET
            descricao = ?,
            valor = ?,
            data_gasto = ?,
            usuario_id = ?,
            categoria_id = ?
        WHERE id = ?
    `).run(
        descricao,
        valor,
        data_gasto,
        usuario_id,
        categoria_id,
        req.params.id
    );

    res.json({
        mensagem: 'Gasto atualizado com sucesso'
    });
};


const deletarGasto = (req, res) => {
    db.prepare(`
        DELETE FROM gastos
        WHERE id = ?
    `).run(req.params.id);

    res.json({
        mensagem: 'Gasto removido com sucesso'
    });
};


const totalGastos = (req, res) => {
    const total = db.prepare(`
        SELECT SUM(valor) AS total
        FROM gastos
    `).get();

    res.json(total);
};

module.exports = {
    listarGastos,
    buscarGasto,
    criarGasto,
    atualizarGasto,
    deletarGasto,
    totalGastos
};