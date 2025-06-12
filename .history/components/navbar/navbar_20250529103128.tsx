// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import Navlink from "@/components/navbar/navlink";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Mengubah state scrolled berdasarkan posisi scroll
//       // Awalnya navbar transparan, kemudian mendapatkan background saat di-scroll
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     // Menambahkan event listener untuk scroll
//     window.addEventListener("scroll", handleScroll);

//      // Membersihkan event listener saat komponen unmount
//      return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 w-full z-20">
//       <div className={`transition-all duration-50 ${
//           scrolled 
//             ? "bg-gray-900 bg-opacity-70 backdrop-blur-sm shadow-md"  : "bg-transparent"
//           }`}>
//         <div className="max-w-screen-xl mx-auto flex items-center justify-between p-1">
//           <Link href="/" className="flex items-center hover:scale-105">
//             <Image
//               src="/1.png"
//               alt="Logo"
//               width={120}
//               height={20}
//               priority
//               className="object-contain"
//             />
//           </Link>
//         <Navlink />
//         </div>
//       </div>
//   </div>
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
    <div className="fixed top-0 w-full z-20">
      <div className={`transition-all duration-300 ${
          scrolled 
            ? "bg-white shadow-lg backdrop-blur-sm"  
            : "bg-white/90 backdrop-blur-sm"
          }`}>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
            {/* GANTI DENGAN LOGO HOTEL ANDA */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Luxury Hotel</h2>
              </div>
            </div>
          </Link>
          
        
          <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {/* <span>+62 280 2794 8543</span> */}
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <Navlink />
        </div>
      </div>
  </div>
  );
};

export default Navbar;