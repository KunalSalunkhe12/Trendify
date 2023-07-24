import { NextResponse } from 'next/server'
import connectDB from '@/utils/db'
import Product from '@/models/product'

export async function GET(request, { params }) {

    try {
        await connectDB()
        const product = await Product.findOne({ _id: params.id })
        return NextResponse.json(product, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

