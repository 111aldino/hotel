import NextAuth, { type DefaultSelection } from "next-auth"
import {jwt} from "jwr-form"

declare module "next-auth"{
    interface Session{
        user: User & DefaultSelection ["user"]
    }
    interface User{
        role?: string
    }
}

declare module "next-auth/jwt"{
    interface JWT{
        sub: string
        role: string
    }
}