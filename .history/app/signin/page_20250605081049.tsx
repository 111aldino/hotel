import { Metadata } from "next"
import {LoginGoogle} from "@/components/login"

export const metadata:Metadata = {
    title : 'Sign In',
}
const SignInPage = async ({
    searchParams
}:{
    searchParams?: Promies<{redirect_url}>
}) =>{
    return(
        <div className=" bg-gray-800 min-h-screen flex items-center">
            <div className="bg-white w-96 mx-auto rounded-sm shadow p-8">
                <h1 className="text-4xl font-bold mb-1">Sign In</h1>
                <p className="font-medium mb-5 text-gray-500">Sign In To Your Account </p>
                <form className="space-y-4 mb-4">
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                            {/* <FaEnvelope /> */}
                            </div>                         <input 
                             type="email" 
                             id="email" 
                             className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                             placeholder="Email Address"
                             required
                         />
                     </div>
                    
                     <div className="relative">
                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                             {/* <FaLock /> */}
                         </div>
                         <input 
                             type="password" 
                             id="password" 
                             className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
                             placeholder="Password"
                             required
                         />
                     </div>
                    
                     <div className="flex items-center justify-between">
                         <div className="flex items-center">
                             <input 
                                 id="remember-me" 
                                 type="checkbox" 
                                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                             />
                             <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                 Remember me
                             </label>
                         </div>
                     </div>
                     <button 
                         type="submit" 
                         className="w-full bg-blue-700 text-white font-medium py-3 px-6 text-base rounded-sm hover:bg-blue-600 cursor-pointer"
                     >
                         Sign In
                     </button>
                 </form>
                <div className="py-4 text-center">
                    <LoginGoogle/>
                </div>
            </div>

        </div>
    )
}
export default SignInPage

// import { Metadata } from "next"
// import { FaEnvelope, FaLock } from 'react-icons/fa6'
// import Link from 'next/link'
// import {LoginGoogle} from "@/components/login"


// export const metadata: Metadata = {
//     title: 'Sign In - Hotel Mumbai',
// }

// const SignInPage = () => {
//     return (
//         <div className="bg-gray-800 min-h-screen flex items-center">
//             <div className="bg-white w-96 mx-auto rounded-sm shadow p-9 mt-25">
//                 <h1 className="text-4xl font-bold mb-1">Sign In</h1>
//                 <p className="font-medium mb-5 text-gray-500">Sign In To Your Account</p>
                
//                 <form className="space-y-4 mb-4">
//                     <div className="relative">
//                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
//                             <FaEnvelope />
//                         </div>
//                         <input 
//                             type="email" 
//                             id="email" 
//                             className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
//                             placeholder="Email Address"
//                             required
//                         />
//                     </div>
                    
//                     <div className="relative">
//                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
//                             <FaLock />
//                         </div>
//                         <input 
//                             type="password" 
//                             id="password" 
//                             className="w-full py-3 pl-10 pr-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
//                             placeholder="Password"
//                             required
//                         />
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                             <input 
//                                 id="remember-me" 
//                                 type="checkbox" 
//                                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                             />
//                             <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
//                                 Remember me
//                             </label>
//                         </div>
//                         <div className="text-sm">
//                             <Link href="/forgot-password" className="text-blue-600 hover:text-blue-800">
//                                 Forgot password?
//                             </Link>
//                         </div>
//                     </div>
                    
//                     <button 
//                         type="submit" 
//                         className="w-full bg-blue-700 text-white font-medium py-3 px-6 text-base rounded-sm hover:bg-blue-600 cursor-pointer"
//                     >
//                         Sign In
//                     </button>
//                 </form>
                
//                 <p className="text-center mt-6 text-sm text-gray-600">
//                     Don't have an account?{' '}
//                     <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
//                         Register here
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default SignInPage

