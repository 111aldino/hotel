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
      <div className={`transition-all duration-50 ${
          scrolled 
            ? "bg-white shadow-lg backdrop-blur-sm"  
            : "bg:"
          }`}>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
            <div className="flex items-center space-x-2">
              <Image
                src="/1.png"
                alt="Logo"
                width={120}  
                height={50} 
                priority
                className="object-contain" 
              />
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
            </div>
          </div>

          <Navlink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;