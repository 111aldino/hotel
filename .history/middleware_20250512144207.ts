import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const ProtectMiddleware = ["/myreservations", "/room", "/profile"];
