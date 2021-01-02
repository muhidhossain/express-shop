const Shop = require('../models/Shop.model');

// Post data
module.exports.create = (shop) => {
    return Shop.create(shop);
};

// Get all data
module.exports.getAll = () => {
    return Shop.find();
};

// Get data by id
module.exports.getById = (id) => {
    return Shop.find({ _id: id });
};

// update by id
module.exports.updateById = (reqBody) => {
    const id = reqBody.id;
    return Shop.findOneAndUpdate(id, reqBody, { new: true });
};

module.exports.deleteById = (reqBody) => {
    const id = reqBody.id;
    return Shop.findOneAndDelete(id);
};
