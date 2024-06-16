const express = require('express');
const router = express.Router();

const eventoController = require('../controllers/eventoController')
const participantesController = require('../controllers/participanteController');
const ingressosController = require('../controllers/ingressoController');

// Rotas para Eventos
router.post('/eventos', eventoController.create);
router.get('/eventos', eventoController.showAll);
router.get('/eventos/:id', eventoController.show);
router.put('/eventos/:id', eventoController.update);
router.delete('/eventos/:id', eventoController.delete);

// Rotas para Participantes
router.post('/participantes', participantesController.create);
router.get('/participantes', participantesController.showAll);
router.get('/participantes/:id', participantesController.show);
router.put('/participantes/:id', participantesController.update);
router.delete('/participantes/:id', participantesController.delete);

// Rotas para Ingressos
router.post('/ingressos', ingressosController.create);
router.get('/ingressos', ingressosController.showAll);
router.get('/ingressos/:id', ingressosController.show);
router.put('/ingressos/:id', ingressosController.update);
router.delete('/ingressos/:id', ingressosController.delete);

module.exports = router;