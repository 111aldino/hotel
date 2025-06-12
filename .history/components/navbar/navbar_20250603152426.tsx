



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

'use client';

import Image from "next/image";
import Link from "next/link";
import Navlink from "@/components/navbar/navlink";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      <div className={`transition-all duration-300 ease-in-out ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/50" 
            : "bg-white/90 backdrop-blur-sm"
          }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo Section */}
          <Link href="/" className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300">
            <div className="relative">
              <Image
                src="/1.png"
                alt="Hotel Logo"
                width={140}  
                height={60} 
                priority
                className="object-contain" 
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          
          {/* Contact Info - Hidden on mobile */}
          <div className="hidden xl:flex items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">Downtown Paradise</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Navlink />
            
            {/* Quick Action Button */}
            <Link 
              href="/room" 
              className="hidden md:flex bg-gradient-to-r from-teal-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 items-center space-x-2"
            >
              <span>Book Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Bottom border with gradient */}
        <div className={`h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

export default Navbar;