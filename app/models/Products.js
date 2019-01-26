const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    
    product: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pices: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    desc: {
        type: Number,
        required: true,
        percent: 0
    },
    image_name: {
        type: String,
        required: false
    },
    is_active: {
        type: Boolean,
        default: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('products', ProductSchema);