const db = require('../database/db');


const listarCategorias = (req, res) => {
    const categorias = db.prepare(
        'SELECT * FROM categorias'
    ).all();

    res.json(categorias);
};


const buscarCategoria = (req, res) => {
    const categoria = db.prepare(
        'SELECT * FROM categorias WHERE id = ?'
    ).get(req.params.id);

    if (!categoria) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada'
        });
    }

    res.json(categoria);
};


const criarCategoria = (req, res) => {
    const { nome } = req.body;

    const resultado = db.prepare(`
        INSERT INTO categorias (nome)
        VALUES (?)
    `).run(nome);

    res.status(201).json({
        mensagem: 'Categoria criada com sucesso',
        id: resultado.lastInsertRowid
    });
};


const atualizarCategoria = (req, res) => {
    const { nome } = req.body;

    db.prepare(`
        UPDATE categorias
        SET nome = ?
        WHERE id = ?
    `).run(nome, req.params.id);

    res.json({
        mensagem: 'Categoria atualizada com sucesso'
    });
};


const deletarCategoria = (req, res) => {
    db.prepare(`
        DELETE FROM categorias
        WHERE id = ?
    `).run(req.params.id);

    res.json({
        mensagem: 'Categoria removida com sucesso'
    });
};

module.exports = {
    listarCategorias,
    buscarCategoria,
    criarCategoria,
    atualizarCategoria,
    deletarCategoria
};