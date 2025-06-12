import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const PUT = async (request: Request) => {
    const formData = await request.formData();
}