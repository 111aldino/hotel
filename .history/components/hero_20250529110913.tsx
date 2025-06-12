// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//     return (
//         <div className="relative h-screen text-white overflow-hidden">
//             <div className="absolute inset-0">
//                 <Image src='/2.jpg' alt="hero image" fill className="object-cover object-center w-full h-full"/>
//                 <div className="absolute inset-0 bg-black opacity-78 "></div>
//             </div>
//             <div className="relative flex flex-col justify-center items-center h-full text-center pt-16">
//                 <h1 className="text-7xl font-bold leading-tight mb-3 capitalize">BOOK YOUR ROOM</h1>
//                 <p className="text-xl text-gray-300 mb-8">Get special offer just for you today</p>
//                 <div className="flex gap-5">
//                     <Link href='/room' className="bg-teal-500 text-white hover:bg-violet-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg">Booking Now</Link>
//                     <Link href='/contact' className="bg-transparent border border-teal-500 text-white hover:bg-violet-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg">Contact Us</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Hero



import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="bg-gradient-to-br from-orange-50 to-pink-100 min-h-screen">
            {/* Main Hero Section */}
            <div className="container mx-auto px-5 pt-40">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-orange-500 font-medium text-lg">Welcome To Our Hotel</p>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                                Hotel for Every<br />
                                Moment Rich in<br />
                                <span className="text-orange-500">Emotion</span>
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                Every moment feels like the first time in paradise. Enjoy the best of your life.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <Link 
                                href='/room' 
                                className="bg-orange-500 text-white hover:bg-orange-600 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                            >
                                Know More About Hotel
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                            <Image 
                                src="/2.jpg" 
                                alt="Luxury Hotel Pool" 
                                fill 
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-60"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>

                    </div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <p className="text-orange-500 font-medium text-lg mb-2">Explore Our Hotel</p>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Find the right Apartment Hotel &<br />
                            Resort for you
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Aut quasi enim consequatur rerum hic atque eligendi architecto quas eveniet vitae ipsum 
                            facilis quo alias rerum distinctio sit asperiores impedit nulla aliquam amet
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Feature 1 */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21H3m16 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Award-winning Restaurant</h3>
                            <p className="text-gray-600">Best Resources Available</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Healthy Food</h3>
                            <p className="text-gray-600">Easy Online Booking</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Individually styled bedrooms</h3>
                            <p className="text-gray-600">Award-winning Playground</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Feature 1 */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21H3m16 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Award-winning Restaurant</h3>
                            <p className="text-gray-600">Best Resources Available</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Healthy Food</h3>
                            <p className="text-gray-600">Easy Online Booking</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">Individually styled bedrooms</h3>
                            <p className="text-gray-600">Award-winning Playground</p>
                        </div>
                    </div>

                    {/* Hotel Image Section */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden">
                            <Image 
                                src="/card.jpg" 
                                alt="Hotel Interior" 
                                fill 
                                className="object-cover"
                            />
                            {/* Orange Badge */}
                            <div className="absolute top-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                Best Price
                            </div>
                        </div>

                        <div className="space-y-6 lg:pl-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    Get special offer just for you today
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Experience luxury at its finest with our exclusive offers. 
                                    Book now and enjoy premium amenities, exceptional service, 
                                    and unforgettable moments at our award-winning hotel.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <Link 
                                    href='/room' 
                                    className="bg-orange-500 text-white hover:bg-orange-600 py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    Booking Now
                                </Link>
                                <Link 
                                    href='/contact' 
                                    className="border-2 border-teal-400 text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-6 rounded-full font-semibold transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;