// import Image from "next/image"
// import { getRoomDetailById } from "@/lib/data"
// import { notFound } from "next/navigation"
// import { IoCheckmark , IoPeopleOutline} from "react-icons/io5"
// import { formatCurreccy } from "@/lib/utils"
// import ReserveForm from "@/components/reserve-form"

// const RoomDetail = async ({roomId}: {roomId : string}) => {

//     const room = await getRoomDetailById (roomId)
//     if(!room) return notFound()

//     return(
//         <div className="max-w-screen-xl py-16 px-4 grid lg:grid-cols-12 gap-8 mx-auto">
//             <div className="md:col-span-8">
//                 <Image src={room.image} alt={room.name} width={770} height={430} priority
//                 className="w-full rounded-sm mb-8"
//                 />
//                 <h1 className="text-5xl font-semibold text-gray-900 mb-8">
//                     {room.name}
//                 </h1>
//                 <p>{room.description}</p>
//                 <h5 className="text-lg font-bold py-1 mt-1 ">Amenities:</h5>
//                 <div className="grid md:grid-cols-3">
//                     {room.RoomAmenities.map((item) => (
//                         <div className="flex gap-1 py-1" key={item.id}>
//                             <IoCheckmark className="size-5" />
//                             <span>{item.Amenities.name}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="md:col-span-4">
//                 <div className="border-2 border-gray-300 border-dashed px-3 py-5 bg-slate-50 rounded-md">
//                     <div className="flex items-center justify-between mb-8">
//                         <div className="flex items-center space-x-2">
//                             <IoPeopleOutline className="size-4"/>
//                             <span>
//                                 {room.capacity} {room.capacity === 1 ? "person" : "people"}
//                             </span>
//                         </div>
//                         <div className="flex items-center">
//                             <span className="text-2xl font-semibold text-gray-600">
//                                 {formatCurreccy
//                                 (room.price)
//                                 }
//                             </span>
//                             <span className="text-gray-400 text-sm">/Malam</span>
//                         </div>
//                     </div>
                    

//                 {/* formulir reservasi */}
//                 <ReserveForm room={room}/>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default RoomDetail


import Image from "next/image"
import { getRoomDetailById } from "@/lib/data"
import { notFound } from "next/navigation"
import { IoCheckmark, IoPeopleOutline, IoStarSharp, IoLocationOutline } from "react-icons/io5"
import { formatCurreccy } from "@/lib/utils"
import ReserveForm from "@/components/reserve-form"

const RoomDetail = async ({roomId}: {roomId : string}) => {

    const room = await getRoomDetailById (roomId)
    if(!room) return notFound()

    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                <Image 
                    src={room.image} 
                    alt={room.name} 
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-screen-xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map((star) => (
                                    <IoStarSharp key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <span className="text-white/90 text-sm font-medium">Premium Room</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            {room.name}
                        </h1>
                        <div className="flex items-center gap-2 text-white/90">
                            <IoLocationOutline className="w-5 h-5" />
                            <span className="text-lg">Luxury accommodation with premium facilities</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Room Gallery */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                        <span className="text-teal-600 text-lg">🏨</span>
                                    </span>
                                    Room Gallery
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <Image 
                                            src={room.image} 
                                            alt={room.name} 
                                            width={800} 
                                            height={400}
                                            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                                        />
                                    </div>
                                    {/* Additional placeholder images */}
                                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-teal-200">
                                        <span className="text-teal-400 font-medium">Additional View</span>
                                    </div>
                                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-teal-200">
                                        <span className="text-teal-400 font-medium">Bathroom View</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Room Description */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 text-lg">📝</span>
                                </span>
                                Room Description
                            </h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {room.description}
                                </p>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 text-lg">✨</span>
                                </span>
                                Room Amenities
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {room.RoomAmenities.map((item) => (
                                    <div 
                                        key={item.id}
                                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-all duration-200 hover:scale-105"
                                    >
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <IoCheckmark className="w-5 h-5 text-green-600" />
                                        </div>
                                        <span className="font-medium text-gray-800">{item.Amenities.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-purple-600 text-lg">ℹ️</span>
                                </span>
                                Important Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 text-sm">⏰</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Check-in / Check-out</h4>
                                            <p className="text-gray-600 text-sm">Check-in: 2:00 PM | Check-out: 12:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-green-600 text-sm">✅</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Free Cancellation</h4>
                                            <p className="text-gray-600 text-sm">Cancel up to 24 hours before check-in</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-orange-600 text-sm">🍳</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Breakfast Included</h4>
                                            <p className="text-gray-600 text-sm">Complimentary breakfast for all guests</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-purple-600 text-sm">📶</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Free WiFi</h4>
                                            <p className="text-gray-600 text-sm">High-speed internet throughout the property</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-8">
                            {/* Price Card */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mb-6 overflow-hidden">
                                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-6 py-4">
                                    <div className="flex items-center justify-between text-white">
                                        <div className="flex items-center gap-2">
                                            <IoPeopleOutline className="w-5 h-5"/>
                                            <span className="font-medium">
                                                {room.capacity} {room.capacity === 1 ? "Guest" : "Guests"}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold">
                                                {formatCurreccy(room.price)}
                                            </div>
                                            <div className="text-teal-100 text-sm font-medium">per night</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex items-center gap-1">
                                            {[1,2,3,4,5].map((star) => (
                                                <IoStarSharp key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-gray-600 text-sm font-medium">4.9 (127 reviews)</span>
                                    </div>
                                    
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Room type</span>
                                            <span className="font-medium text-gray-900">Premium Suite</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">Size</span>
                                            <span className="font-medium text-gray-900">35 m²</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">View</span>
                                            <span className="font-medium text-gray-900">City & Garden</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Reservation Form */}
                            <ReserveForm room={room}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetail