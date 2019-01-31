const Product = require('../models/Products')

const createProduct = (data) => {
    return Product.create(data)
}

const getProductByProductName = (product) => {
    return Product.findOne({
        product: product,
        is_active: true
    })
}

const getActiveProducts = () => {
    return Product.find({
        is_active: true
    })
}

const getAllProducts = () => {
    return Product.find()
}

const deleteProductByProductName = (product) => {
    return Product.findOneAndUpdate({
        product: product,
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
    getProductByProductName,
    getProductByProductName,
    deleteProductByProductName,
    getActiveProducts
}