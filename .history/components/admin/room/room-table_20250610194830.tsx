// import { getRooms } from "@/lib/data";
// import Image from "next/image";
// import { formatDate, formatCurreccy } from "@/lib/utils";
// import { DeleteButton, EditButton } from "@/components/admin/room/button";

// const RoomTable = async () => {
//   const rooms = await getRooms();
//   if (!rooms?.length)
//     return <p className="text-center text-gray-500">No Room found</p>;

//   return (
//     <div className="bg-white p-4 mt-5 shadow-sm">
//       <table className="w-full divide-y divide-gray-200">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 w-32 text-sm font-bold text-gray-700 uppercase text-left">
//               Image
//             </th>
//             <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
//               Room Name
//             </th>
//             <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
//               Price
//             </th>
//             <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">
//               Create At
//             </th>
//             <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">
//               Action
//             </th>
//           </tr>
//         </thead>

//         <tbody className="divide-y divide-gray-200">
//           {rooms.map((room) => (
//             <tr className="hover:bg-gray-100" key={room.id}>
//               <td className="px-6 py-4">
//                 <div className="h-20 w-32 relative">
//                   <Image
//                     src={room.image}
//                     alt="room image"
//                     fill
//                     sizes="20vw"
//                     className="object-cover"
//                   />
//                 </div>
//               </td>
//               <td className="px-6 py-4">{room.name}</td>
//               <td className="px-6 py-4">{formatCurreccy(room.price)}</td>
//               <td className="px-6 py-4">
//                 {formatDate(room.createdAt.toString())}
//               </td>
//               <td className="px-6 py-4 text-right">

//                 <div className="flex items-center justify-center gap-1">

//                 <EditButton id={room.id}/>
//                 <DeleteButton id={room.id} image={room.image}/>
//                 </div>

//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default RoomTable;

import { getRooms } from "@/lib/data";
import Image from "next/image";
import { formatDate, formatCurreccy } from "@/lib/utils";
import { DeleteButton, EditButton } from "@/components/admin/room/button";

const RoomTable = async () => {
  const rooms = await getRooms();
  
  if (!rooms?.length) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 mt-8 shadow-xl border border-white/20 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">No Rooms Found</h3>
          <p className="text-gray-500">Start by creating your first room to see it listed here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl mt-8 shadow-xl border border-white/20 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-4"></div>
          Room Management
        </h2>
        <p className="text-slate-300 mt-1">Manage and monitor all your rooms</p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-gray-50 to-blue-50/30 border-b border-gray-200">
              <th className="px-8 py-6 text-left">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Image</span>
              </th>
              <th className="px-8 py-6 text-left">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Room Details</span>
              </th>
              <th className="px-8 py-6 text-left">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Price</span>
              </th>
              <th className="px-8 py-6 text-left">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Created</span>
              </th>
              <th className="px-8 py-6 text-center">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</span>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {rooms.map((room, index) => (
              <tr 
                key={room.id} 
                className="group hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-purple-50/20 
                          transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <td className="px-8 py-6">
                  <div className="relative w-36 h-24 rounded-2xl overflow-hidden shadow-md 
                                group-hover:shadow-lg transition-all duration-300 
                                group-hover:scale-105 bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={room.image}
                      alt={`${room.name} room`}
                      fill
                      sizes="(max-width: 768px) 100vw, 150px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </td>

                {/* Room Details */}
                <td className="px-8 py-6">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 
                                 transition-colors duration-300">
                      {room.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      Room ID: {room.id.substring(0, 8)}...
                    </p>
                  </div>
                </td>

                {/* Price */}
                <td className="px-8 py-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-xl 
                                bg-gradient-to-r from-green-50 to-emerald-50 
                                border border-green-200">
                    <span className="text-lg font-bold text-green-700">
                      {formatCurreccy(room.price)}
                    </span>
                    <span className="text-xs text-green-600 ml-1">/night</span>
                  </div>
                </td>

                {/* Created Date */}
                <td className="px-8 py-6">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {formatDate(room.createdAt.toString())}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      {new Date(room.createdAt).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </td>

                {/* Actions */}
                <td className="px-8 py-6">
                  <div className="flex items-center justify-center gap-3 opacity-0 
                                group-hover:opacity-100 transition-all duration-300 
                                transform translate-y-2 group-hover:translate-y-0">
                    <EditButton id={room.id} />
                    <DeleteButton id={room.id} image={room.image} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-gray-50/50 px-8 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Total: <span className="font-semibold text-gray-900">{rooms.length}</span> rooms
          </p>
          <div className="flex items-center text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTable;