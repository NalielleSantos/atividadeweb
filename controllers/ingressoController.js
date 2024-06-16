const { Ingresso, Evento } = require('../models');

module.exports = class ingressoController {
    static async create(req, res) {
        try {
            const ingresso = await Ingresso.create({
                eventoId: req.body.eventoId,
                participanteId: req.body.participanteId
            });
            return res.status(201).json({ res: 'Ingresso criado com sucesso!' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async showAll(req, res) {
        try {
            const ingressos = await Ingresso.findAll();
            return res.status(200).json({ ingressos });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async show(req, res) {
        try {
            const ingresso = await Ingresso.findByPk(req.params.id, {
                include: ['participante', 'evento']
            });
            if (!ingresso) {
                return res.status(404).json({ error: 'Evento não encontrado' });
            }
            return res.status(200).json({ ingresso });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async update(req, res) {
        try {
            const ingresso = await Ingresso.findByPk(req.params.id);
            if (!ingresso) {
                return res.status(404).json({ error: 'Ingresso não encontrado' });
            }
            await ingresso.update({
                eventoId: req.body.eventoId,
                participanteId: req.body.participanteId
            });
            return res.status(200).json({ res: 'Ingresso atualizado' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async delete(req, res) {
        try {
            const deleted = await Ingresso.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                return res.status(404).json({ error: 'Ingresso não encontrado' });
            }
            return res.status(204).json({ res: 'Ingresso excluído com sucesso!' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};
