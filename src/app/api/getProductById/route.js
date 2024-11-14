import { NextResponse } from "next/server";
import { getAllProductsDB } from "@/app/actions";

export async function GET(req) {
  try {
    // Extract the 'id' from the query string
    const { searchParams } = req.nextUrl;
    const id = searchParams.get('id'); // Use searchParams.get('id')

    // Fetch all products from the database
    const response = await getAllProductsDB();

    // Ensure the response is an array
    const products = Array.isArray(response) ? response : response.products || [];

    // If an id is provided, filter the products by id
    if (id) {
      const product = products.find((product) => product._id === id);

      // If no product found with the given id, return a 404 response
      if (!product) {
        return NextResponse.json(
          { success: false, message: "Product not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        product, // Return the specific product
      });
    }

    // If no id is provided, return all products
    return NextResponse.json({
      success: true,
      products, // Return the full list of products
    });
  } catch (error) {
    console.error("Error fetching products:", error.message);

    return NextResponse.json(
      {
        success: false,
        message: "Error fetching products.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
