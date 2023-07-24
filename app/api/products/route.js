import { NextResponse } from 'next/server'
import connectDB from '@/utils/db'
import Product from '@/models/product'

export async function GET(request) {
    try {
        await connectDB()
        const products = await Product.find()
        return NextResponse.json(products, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}