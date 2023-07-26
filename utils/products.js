import connectDB from '@/utils/db'
import Product from '@/models/product'

export async function getProducts(request) {
    try {
        await connectDB()

        const products = await Product.find()

        return products;

    } catch (error) {
        return { error: "Failed to get Products Data" }
    }
}

export async function getProductById(id) {

    try {
        await connectDB()
        const product = await Product.findOne({ _id: id })
        return product

    } catch (error) {
        return { error: 'Internal Server Error' }
    }
}