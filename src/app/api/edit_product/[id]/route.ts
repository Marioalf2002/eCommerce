import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams: any) {
  try {
    const body = await request.json();
    const id = URLParams.params.id;
    const { name, category, price } = body;

    await connectMongoDB();

    console.log(id, name, category, price);

    const data = await Product.findByIdAndUpdate(id, {
      name,
      category,
      price,
    });

    return NextResponse.json({ msg: "Producto Actualizado!", data });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error, msg: "¡Algo salió mal!" },
      { status: 400 }
    );
  }
}
