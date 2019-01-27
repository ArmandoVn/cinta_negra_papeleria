const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    
    product: {
        type: String,
        required: [true,"Product name is required!"]
    },
    description: {
        type: String,
        required: [true,"Description is required!"]
    },
    pices: {
        type: Number,
        required: [true,"Number of pices is required!"],
        default: 0
    },
    price: {
        type: Number,
        required: [true,"Price product is required!"],
        default: 0
    },
    desc: {
        type: Number,
        required: true,
        percent: 0
    },
    image_name: {
        type: String,
        required: [true,"Image product is required!"]
    },
    is_active: {
        type: Boolean,
        default: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
    
},{"collection": "products", "timestamps": true});

module.exports = mongoose.model('products', ProductSchema);