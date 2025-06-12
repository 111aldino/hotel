import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const ProtextMiddleware = async (req: NextRequest) => {
