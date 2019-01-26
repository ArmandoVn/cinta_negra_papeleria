const Product = require('../models/Products')

const createProduct = (data) => {
    return Product.create(data)
}

const getProductById = (id) => {
    return Product.findOne({
        _id: id,
        is_active: true
    })
}

const getProductByProduct = (product) => {
    return Product.findOne({
        product: product,
        is_active: true
    })
}

const getAllProducts = () => {
    return Product.find({
        is_active: true
    })
}

const deleteProductById = (id) => {
    return Product.findOneAndUpdate({
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
    createProduct,
    getAllProducts,
    getProductById,
    getProductByProduct,
    deleteProductById
}