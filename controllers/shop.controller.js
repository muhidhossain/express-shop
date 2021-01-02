const shopService = require('../services/shop.service');

// Post data
module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// Get all data
module.exports.getAll = async (req, res, next) => {
    try {
        const fetchedData = await shopService.getAll();
        return res.status(200).json(fetchedData);
    } catch (e) {
        console.error(e);
        return res.status(400).json(e);
    }
};

// Get by id
module.exports.getById = async (req, res, next) => {
    try {
        const fetchedById = await shopService.getById(req.query.id);
        return res.status(200).json(fetchedById);
    } catch (e) {
        console.error(e);
        return res.status(400).json(e);
    }
};

// Update by id
module.exports.updateById = async (req, res, next) => {
    try {
        const updatedById = await shopService.updateById(req.body);
        return res.status(200).json(updatedById);
    } catch (e) {
        console.error(e);
        return res.status(500).json(e);
    }
};

// Delete by id
module.exports.deleteById = async (req, res, next) => {
    try {
        const deletedById = await shopService.deleteById(req.body);
        return res.status(200).json(deletedById);
    } catch (e) {
        console.error(e);
        return res.status(500).json(e);
    }
};
