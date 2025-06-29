import { put, del } from "@vercel/blob";
import { NextResponse } from "next/server";

export const PUT = async (request: Request) => {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if(file.size === 0  || file.size === undefined){
        return NextResponse.json({ message: "File is empty" }, { status: 400 });
    }

    if(file.size > 4 * 1024 * 1024){
        return NextResponse.json({ message: "File is too large" }, { status: 400 });
    }

    if(!file.type.startsWith("image/")){
        return NextResponse.json({ message: "File is not an image" }, { status: 400 });
    }

    const blob = await put(file.name, file, {
        access: "public",
        multipart: true,

    });
    return NextResponse.json(blob)
}

export const DELETE = async (request: Request) => {
    const {searchParams} = new URL (request.url);
    const imageUrl = searchParams.get("imageUrl"); as str
}