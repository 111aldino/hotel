import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { error } from "console";

export const getAminities = async () => {
    const session = await auth()
    if(!session || !session.user){
        throw new Error("Una")
    }
}