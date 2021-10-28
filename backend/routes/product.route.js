const express = require('express')
const router = express.Router()

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads/products')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
const upload = multer({ storage: storage })

// Import Controllers
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')

// Routes Product
router.route('/').get(getProducts)
router.route('/:productId').get(getProductById)
router.route('/create').post(upload.array(), createProduct)
router.route('/update').put(updateProduct)
router.route('/delete').delete(deleteProduct)

module.exports = router