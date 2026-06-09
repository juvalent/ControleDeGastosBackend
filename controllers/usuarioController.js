const db = require('../database/db');

const listarUsuarios = (req, res) => {
    const usuarios = db.prepare(
        'SELECT * FROM usuarios'
    ).all();

    res.json(usuarios);
};


const buscarUsuario = (req, res) => {
    const usuario = db.prepare(
        'SELECT * FROM usuarios WHERE id = ?'
    ).get(req.params.id);

    if (!usuario) {
        return res.status(404).json({
            mensagem: 'Usuário não encontrado'
        });
    }

    res.json(usuario);
};


const criarUsuario = (req, res) => {
    const { nome, email } = req.body;

    const resultado = db.prepare(`
        INSERT INTO usuarios (nome, email)
        VALUES (?, ?)
    `).run(nome, email);

    res.status(201).json({
        mensagem: 'Usuário criado com sucesso',
        id: resultado.lastInsertRowid
    });
};


const atualizarUsuario = (req, res) => {
    const { nome, email } = req.body;

    db.prepare(`
        UPDATE usuarios
        SET nome = ?, email = ?
        WHERE id = ?
    `).run(nome, email, req.params.id);

    res.json({
        mensagem: 'Usuário atualizado com sucesso'
    });
};


const deletarUsuario = (req, res) => {
    db.prepare(`
        DELETE FROM usuarios
        WHERE id = ?
    `).run(req.params.id);

    res.json({
        mensagem: 'Usuário removido com sucesso'
    });
};

module.exports = {
    listarUsuarios,
    buscarUsuario,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};