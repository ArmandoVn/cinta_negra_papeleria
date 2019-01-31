const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        require:[true, "The order must have an owner"]
    },
    date_creation: {
        type: Date,
        default: Date.now()
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
        default: 0

    }
},{"collection": "orders", "timestamps": true})

module.exports = mongoose.model('orders', OrderSchema)

/*
{
    date_creation:
}
*/