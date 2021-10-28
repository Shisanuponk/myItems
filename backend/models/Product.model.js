const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pls provide product name"]
    },
    price: {
        type: Number,
        required: [true, "Pls provide product price"]
    },
    type: {
        type: String,
        required: [true, "Plss provide product type"]
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    },
    description: {
        type: String,
        default: "Try to put product info same as Size, Color, etc.",
        required: true
    },
    images: {
        type: Array,
        required: [true, "Pls provide the images for the product"]
    },
    owner: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product