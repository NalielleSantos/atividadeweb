const { Participante } = require('../models');

module.exports = class participanteController {
    static async create(req, res) {
        try {
            const participante = await Participante.create({
                nome: req.body.nome,
                email: req.body.email
            });
            return res.status(201).json({ res: 'Participante criado com sucesso!' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async showAll(req, res) {
        try {
            const participantes = await Participante.findAll();
            return res.status(200).json({ participantes });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async show(req, res) {
        try {
            const participante = await Participante.findByPk(req.params.id);
            if (!participante) {
                return res.status(404).json({ error: 'Participante não encontrado' });
            }
            return res.status(200).json({ participante });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async update(req, res) {
        try {
            const participante = await Participante.findByPk(req.params.id);
            if (!participante) {
                return res.status(404).json({ error: 'Participante não encontrado' });
            }
            await participante.update({
                nome: req.body.nome,
                email: req.body.email
            });
            return res.status(200).json({ res: 'Participante atualizado' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async delete(req, res) {
        try {
            const deleted = await Participante.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                return res.status(404).json({ error: 'Participante não encontrado' });
            }
            return res.status(204).json({ res: 'participante excluído com sucesso!' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};