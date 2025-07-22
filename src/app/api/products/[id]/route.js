import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { ObjectId } from "mongodb";
export async function GET(request, { params }) {
  await connectDB();
  const { id } = params;

  try {
    const product = await Product.findOne({ _id: new ObjectId(id) });
    if (!product)
      return Response.json({ message: "Product Not Found" }, { status: 404 });

    return Response.json(product);
  } catch (error) {
    return Response.json(
      { message: "Error fetching product" },
      { status: 500 }
    );
  }
}
export async function DELETE(request, { params }) {
  await connectDB();
  await Product.findByIdAndDelete(params.id);
  return Response.json({ success: true });
}
