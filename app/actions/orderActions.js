const Order = require('../models/Orders')

const createOrder = (data) => {
    return Order.create(data)
}

const getOrdersByAvatarName = (avatar_name) => {
    return Order.find({
        avatar_name: avatar_name,
        is_active: true
    })
}

const getAllOrders = () => {
    return Order.find()
}

const addProduct = (product) => {
    
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
    getOrdersByAvatarName,
    getAllOrders,
    deleteOrder
}