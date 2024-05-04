import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
  try {
    const id = URLParams.params.id;

    await connectMongoDB();

    await Product.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Producto Eliminado!" });
  } catch (error) {
    return NextResponse.json(
      { error, msg: "¡Algo salió mal!" },
      { status: 400 }
    );
  }
}
