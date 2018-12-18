const swag = require('../models/swag');

const search = (req, res, next) => {
    const {session} = req;
    const category = req.query.category;
    // console.log(category)
    if (!category) {
        res.status(200).json(swag);
    } else {
        const arr = swag.filter(item => item.category === category)
        res.status(200).json(arr);
    }
}

module.exports = {
    search
}