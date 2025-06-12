// import Card from '@/components/card'
// import { getRooms } from '@/lib/data'
// import { notFound } from 'next/navigation'


// const Main = async () => {
//     const rooms = await getRooms()
//     if(!rooms) return notFound()
//     return (
//         <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto ">
//             <div className="grid gap-7 md:grid-cols-3">
//                 {rooms.map((room) => (
//                     <Card room={room} key={room.id}/>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Main



import Card from '@/components/card'
import { getRooms } from '@/lib/data'
import { notFound } from 'next/navigation'

const Main = async () => {
    const rooms = await getRooms()
    if(!rooms) return notFound()
    
    return (
        <div className="bg-gray-50 py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-19">
                    <p className="text-orange-500 font-medium text-lg mb-2">Our Rooms</p>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Choose Your Perfect Room
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Experience comfort and luxury in our carefully designed rooms. 
                        Each room offers modern amenities and exceptional service for your perfect stay.
                    </p>
                </div>

                {/* Room Cards Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room) => (
                        <Card room={room} key={room.id}/>
                    ))}
                </div>

                {/* Call to Action
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Book Your Stay?</h3>
                        <p className="mb-6 opacity-90">
                            Don't miss out on our special offers. Book now and create unforgettable memories.
                        </p>
                        <button className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200 hover:scale-105">
                            View All Rooms
                        </button>
                    </div> */}
                </div>
            </div>
        // </div>
    )
}

export default Main