import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export const getAminities = async () => {
    const session = await auth()
    if(!session || !session.user){
        trh
    }
}