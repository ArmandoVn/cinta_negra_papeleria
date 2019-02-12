const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    
    product: {
        type: String,
        required: [true,"Product name is required!"],
        unique: true
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
        type: String
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

// Here we tell mongodb that all ObjectId types will be transformed into String
// mongoose.Types.ObjectId.prototype.valueOf = function () {
// 	return this.toString();
// }

module.exports = mongoose.model('products', ProductSchema)

/* 
{
    product: "Popo",
    description: "Popo",
    pices: 2,
    price:17.5,
    desc: 0
}
*/