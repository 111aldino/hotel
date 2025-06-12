



// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import Navlink from "@/components/navbar/navlink";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 w-full z-20">
//       <div className={`transition-all duration-50 ${
//           scrolled 
//             ? "bg-white/90 shadow-lg backdrop-blur-sm"  
//             : "bg-white/90 backdrop-blur-sm"
//           }`}>
//         <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
//           <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
//             <div className="flex items-center space-x-2">
//               <Image
//                 src="/1.png"
//                 alt="Logo"
//                 width={120}  
//                 height={50} 
//                 priority
//                 className="object-contain" 
//               />
//             </div>
//           </Link>
          
//           <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
//             <div className="flex items-center space-x-2">
//             </div>
//           </div>

//           <Navlink />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;