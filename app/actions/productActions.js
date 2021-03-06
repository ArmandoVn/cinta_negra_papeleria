const Product = require('../models/Products')

// valid method
const createProduct = (data) => {
    return Product.create(data)
}

const getProductByProductName = (product) => {
    return Product.findOne({
        product: product,
        is_active: true
    })
}

const getAllActiveProducts = () => {
    return Product.find({
        is_active: true
    })
}

const getAllProducts = () => {
    return Product.find()
}

const deleteProductByProductName = product => {
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
    getAllActiveProducts
}