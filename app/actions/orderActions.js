const Order = require('../models/Orders')

const createOrder = (data) => {
    return Order.create(data)
}

const getOrderById = (id) => {
    return Order.findOne({
        _id: id,
        is_active: true
    })
}

const getAllOrders = () => {
    return Order.find({
        is_active: true
    })
}

const deleteOrder = (id) => {
    return Order.findOneAndUpdate({
        _id: id,
        is_active: true
    },
    {
        $set: {
            is_active: false
        }
    },
    {
        new: true
    })
}

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
    deleteOrder
}