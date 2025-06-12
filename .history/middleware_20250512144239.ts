import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const ProtectMiddleware = ["/myreservation", "/checkout", "/admin"];

export asy function middleware(request: NextRequest) {