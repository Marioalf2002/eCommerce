import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imgSrc, fileKey, name, category, price } = body;

    await connectMongoDB();

    const data = await Product.create({
      imgSrc,
      fileKey,
      name,
      category,
      price,
    });

    return NextResponse.json({ msg: "Producto Agregado!", data });
  } catch (error) {
    return NextResponse.json(
      { error, msg: "¡Algo salió mal!" },
      { status: 400 }
    );
  }
}