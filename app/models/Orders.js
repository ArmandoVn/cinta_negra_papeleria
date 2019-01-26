const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    date_creation: {
        type: Date,
        required: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "products"
        }
    ],
    is_active: {
        type: Boolean,
        default: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('orders', OrderSchema)