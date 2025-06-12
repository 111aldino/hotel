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
                                    {/* <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-teal-200">
                                        <span className="text-teal-400 font-medium">Additional View</span>
                                    </div>
                                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl h-48 flex items-center justify-center border-2 border-dashed border-teal-200">
                                        <span className="text-teal-400 font-medium">Bathroom View</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* deksripsi */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 text-lg">📝</span>
                                </span>
                                About This Room
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-400">
                                    <p className="text-gray-800 leading-relaxed text-lg font-medium mb-4 break-words">
                                        {room.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-blue-700 flex-wrap">
                                        <span className="text-sm">✨</span>
                                        <span className="text-sm font-medium break-words">Perfect for a memorable stay</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 break-words">
                                            <span className="text-green-600">🏨</span>
                                            Room Features
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 break-words flex-1">Spacious and comfortable layout</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 break-words flex-1">Modern furnishing and decor</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 break-words flex-1">Premium bedding and linens</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 break-words flex-1">Climate control system</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 break-words">
                                            <span className="text-purple-600">🛁</span>
                                            Bathroom & Comfort
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 break-words flex-1">Private bathroom with hot shower</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 break-words flex-1">Complimentary toiletries</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 break-words flex-1">Fresh towels and bathrobes</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 break-words flex-1">24/7 room service available</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 break-words">
                                        <span className="text-yellow-600">⭐</span>
                                        What Makes This Room Special
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                            <div className="text-2xl mb-2">🌟</div>
                                            <div className="font-medium text-gray-900 break-words">Premium Quality</div>
                                            <div className="text-sm text-gray-600 break-words">High-end materials and finishes</div>
                                        </div>
                                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                            <div className="text-2xl mb-2">🛡️</div>
                                            <div className="font-medium text-gray-900 break-words">Safe & Secure</div>
                                            <div className="text-sm text-gray-600 break-words">24/7 security and safety measures</div>
                                        </div>
                                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                            <div className="text-2xl mb-2">🏆</div>
                                            <div className="font-medium text-gray-900 break-words">Award Winning</div>
                                            <div className="text-sm text-gray-600 break-words">Recognized for excellence</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Preview */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 break-words">
                                        <span className="text-blue-600">💬</span>
                                        What Guests Are Saying
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                <div className="flex items-center gap-1">
                                                    {[1,2,3,4,5].map((star) => (
                                                        <IoStarSharp key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 break-words">Sarah M.</span>
                                            </div>
                                            <p className="text-gray-700 text-sm italic break-words">
                                                "Absolutely stunning room with amazing amenities. The comfort level exceeded our expectations!"
                                            </p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                <div className="flex items-center gap-1">
                                                    {[1,2,3,4,5].map((star) => (
                                                        <IoStarSharp key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 break-words">David K.</span>
                                            </div>
                                            <p className="text-gray-700 text-sm italic break-words">
                                                "Perfect location, excellent service, and the room was immaculate. Highly recommended!"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


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