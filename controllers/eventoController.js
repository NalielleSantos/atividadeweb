const { Evento } = require('../models');

module.exports = class eventoController {
    static async create(req, res) {
        try {
            const evento = await Evento.create({
                nome:req.body.nome,
                data:new Date(req.body.data),
                local:req.body.local
            });
            return res.status(201).json({ res: 'evento criado com sucesso!' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async showAll(req, res) {
        try {
            const eventos = await Evento.findAll();
            return res.status(200).json({ eventos });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async show(req, res) {
        try {
            const evento = await Evento.findByPk(req.params.id);
            if (!evento) {
                return res.status(404).json({ error: 'Evento não encontrado' });
            }
            return res.status(200).json({ evento });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async update(req, res) {
        try {
            const updatedEvento = await Evento.findByPk(req.params.id);
            await updatedEvento.update({
                nome:req.body.nome,
                data:new Date(req.body.data),
                local:req.body.local
            })
            return res.status(200).json({ res: 'evento atualizado' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    
    static async delete(req, res) {
        try {
            const deleted = await Evento.destroy({
                where: { id: req.params.id }
            });
            if (!deleted) {
                return res.status(404).json({ error: 'Evento não encontrado' });
            }
            return res.status(200).json({ res: 'evento excluído com sucesso!' });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};