const Cliente = require('../models/cliente.model');

exports.create = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


