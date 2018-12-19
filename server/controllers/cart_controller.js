const swag = require('../models/swag');

const add = (req, res, next) => {
    const { session } = req
    const id = req.query.id;
    let cart = req.session.user.cart;
    let item = cart.find(item => id == item.id)
    const newItem = swag.find(item => id == item.id);
    if (!item) {
        cart.push(newItem);
        req.session.user.total += newItem.price
    }
        res.status(200).json(session.user)
    }

const deleteItem = (req, res, next) => {
    const { session } = req
    const id = req.query.id;
    let cart = req.session.user.cart;
    let item = cart.find(item => id == item.id)
    // console.log(item)
    if (!item) {
        res.status(200).json(session.user);
    } else; {
        let index = cart.indexOf(item => id == item.id)
        cart.splice(index, 1)
        req.session.user.total -= item.price;
        res.status(200).json(session.user)
    }
}

const checkout = (req, res, next) => {
    const { session } = req;
    req.session.user.cart = [],
    req.session.user.total = 0
    res.status(200).json(session.user)

}

module.exports = {
    add,
    deleteItem,
    checkout
}