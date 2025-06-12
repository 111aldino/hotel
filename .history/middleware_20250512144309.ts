import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const ProtectMiddleware = ["/myreservation", "/checkout", "/admin"];

export async function middleware(request: NextRequest) {
    const session = await auth()
}