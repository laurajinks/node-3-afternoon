const swag = require('../models/swag');

const search = (req, res, next) => {
    const {session} = req;
    const {search} = req.body;
    const category = swag.find(item => item.category === search)
    if (category) {
        const arr = swag.filter(item => item.category === category)
        res.status(200).json(arr);
    } else {
        res.status(200).json(swag);
    }
}

module.exports = {
    search
}