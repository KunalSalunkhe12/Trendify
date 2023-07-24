const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    original_price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    reviews: {
        type: String,
        required: true,
    },
    in_stock: {
        type: Boolean,
        required: true,
    },
    delivery_time: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Product || mongoose.model('Product', productSchema, "products");