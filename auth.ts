import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: {strategy:'jwt'},
  pages:{
    signIn: '/signin',
  },
  callbacks:{
    jwt({token, user}){
      if(user) token.role = user.role;
      return token
    },
    session({session, token}){
      session.user.id = token.sub;
      session.user.role = token.role;
      return session
    }
  }
})

// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"
// import { prisma } from "@/lib/prisma"
// import { PrismaAdapter } from "@auth/prisma-adapter"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   cookies: {
//     sessionToken: {
//       name: `next-auth.session-token`,
//       options: {
//         httpOnly: true,
//         sameSite: 'lax',
//         path: '/',
//         secure: process.env.NODE_ENV === 'production',
//       },
//     },
//   },
//   callbacks: {
//     async session({ session, token }) {
//       if (token.sub) {
//         session.user.id = token.sub;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//   },
//   debug: process.env.NODE_ENV !== 'production',
//   pages: {
//     signIn: '/signin',
//   }
// })

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";

// export const {
//   handlers,
//   signIn,
//   signOut,
//   auth,
// } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID || "",
//       clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
//     }),
//   ],
//   callbacks: {
//     async session({ session, user, token }) {
//       // Add user ID to session
//       if (token?.sub && session.user) {
//         session.user.id = token.sub;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       // Pass user ID to token
//       if (user) {
//         token.sub = user.id;
//       }
//       return token;
//     },
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   pages: {
//     signIn: "/signin",
//     error: "/signin", // Error page if authentication fails
//   },
//   debug: process.env.NODE_ENV !== "production",
// });