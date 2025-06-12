// import Image from "next/image";
// import Link from "next/link";
// import { IoPeopleOutline } from "react-icons/io5";
// import { Room } from "@prisma/client";
// import { formatCurreccy } from "@/lib/utils";

// const Card = ({room}: {room: Room}) => {
//   return (
//     <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
//       <div className="h-[260px] w-auto rounded-t-sm relative">
//         <Image
//           src={room.image}
//           width={200}
//           height={100}
//           alt="room image"
//           className="w-full h-full object-cover rounded-t-sm"
//         />
//       </div>
//       <div className="p-8">
//         <h4 className="text-2xl font-medium">
//           <Link
//             href={`/room/${room.id}`}
//             className="hover:text-gray-800 transition duration-150"
//           >
//             {room.name}
//           </Link>
//         </h4>
//         <h4 className="text-2xl mb-7">
//           <span className="font-semibold text-gray-600">
//             {formatCurreccy(room.price)}
//           </span>

//           <span className="text-gray-400 text-sm">/Malam</span>
//         </h4>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <IoPeopleOutline />
//             <span>{room.capacity} {room.capacity === 1 ? "person" : "people"}</span>
//           </div>
//           <Link
//             href={`/room/${room.id}`}
//             className="px-6 py-2.5 md:px-10 md-py-3 font-semibold text-white bg-teal-400 rounded-sm hover:bg-violet-500 transition duration-150"
//           >
//             Pesan Sekarang
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;



// import Image from "next/image";
// import Link from "next/link";
// import { IoPeopleOutline } from "react-icons/io5";
// import { Room } from "@prisma/client";
// import { formatCurreccy } from "@/lib/utils";

// const Card = ({room}: {room: Room}) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden group">
//       <div className="h-[260px] w-auto rounded-t-2xl relative overflow-hidden">
//         <Image
//           src={room.image}
//           width={200}
//           height={100}
//           alt="room image"
//           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//         {/* Overlay on hover */}
//         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
//         {/* Price Badge */}
//         <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//           Best Deal
//         </div>
//       </div>
      
//       <div className="p-6">
//         <h4 className="text-xl font-semibold mb-2">
//           <Link
//             href={`/room/${room.id}`}
//             className="hover:text-orange-500 transition-colors duration-200"
//           >
//             {room.name}
//           </Link>
//         </h4>
        
//         <div className="mb-6">
//           <span className="text-2xl font-bold text-orange-500">
//             {formatCurreccy(room.price)}
//           </span>
//           <span className="text-gray-500 text-sm ml-1">/Malam</span>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2 text-gray-600">
//             <IoPeopleOutline className="w-5 h-5" />
//             <span className="text-sm font-medium">
//               {room.capacity} {room.capacity === 1 ? "person" : "people"}
//             </span>
//           </div>
          
//           <Link
//             href={`/room/${room.id}`}
//             className="px-6 py-2.5 font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-200 hover:scale-105 hover:shadow-lg text-sm"
//           >
//             Pesan Sekarang
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;