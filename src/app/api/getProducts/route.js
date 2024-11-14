import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { getAllProductsDB } from "@/app/actions";

export async function GET(req) {
  try {
    const response = await getAllProductsDB(); // Fixed typo: 'reponse' -> 'response'

    return NextResponse.json({
      response // Now correctly referencing 'response'
    });
  } catch (error) {
    console.error("Error reading folder:", error.message);

    return NextResponse.json(
      {
        success: false,
        message: "Error reading folder.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
