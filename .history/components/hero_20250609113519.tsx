


// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//     return (
//         <div className="relative overflow-hidden py-34">
//             {/* Hero Section with Gradient Background */}
//             <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
//                 {/* Animated Background Elements */}
//                 <div className="absolute inset-0 overflow-hidden">
//                     <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
//                     <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//                 </div>

//                 {/* Main Content */}
//                 <div className="relative container mx-auto px-6 pt-32 pb-20">
//                     <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
//                         {/* Left Content */}
//                         <div className="space-y-8 text-white">
//                             <div className="space-y-6">
//                                 <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//                                     <span className="text-teal-300 font-medium text-sm tracking-wide">✨ LUXURY EXPERIENCE AWAITS</span>
//                                 </div>
                                
//                                 <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                                     Hotel for Every
//                                     <br />
//                                     <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                                         Moment Rich
//                                     </span>
//                                     <br />
//                                     in Emotion
//                                 </h1>
                                
//                                 <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
//                                     Every moment feels like the first time in paradise. Experience luxury redefined with our world-class amenities and exceptional service.
//                                 </p>
//                             </div>
                            
//                             <div className="flex flex-col sm:flex-row gap-4">
//                                 <Link 
//                                     href='/room' 
//                                     className="group bg-gradient-to-r from-teal-500 to-purple-600 text-white py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 flex items-center justify-center gap-3"
//                                 >
//                                     Explore Our Rooms
//                                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                                     </svg>
//                                 </Link>
                                
//                                 <Link 
//                                     href='/contact' 
//                                     className="group border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3"
//                                 >
//                                     Contact Us
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* Right Image */}
//                         <div className="relative">
//                             <div className="relative h-[700px] w-full">
//                                 {/* Main Image Container */}
//                                 <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10">
//                                     <Image 
//                                         src="/2.jpg" 
//                                         alt="Luxury Hotel Pool" 
//                                         fill 
//                                         className="object-cover hover:scale-105 transition-transform duration-700"
//                                         priority
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                                 </div>

//                                 {/* Floating Elements */}
//                                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-purple-500 rounded-full opacity-80 blur-xl animate-bounce"></div>
//                                 <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-80 blur-xl animate-bounce delay-500"></div>
                                
//                                 {/* Stats Card */}
//                                 <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
//                                     <div className="text-white text-center">
//                                         <div className="text-2xl font-bold text-teal-300">5.0</div>
//                                         <div className="text-xs text-gray-300">★★★★★</div>
//                                         <div className="text-xs text-gray-400">Rating</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Features Section */}
//             <div className="relative bg-white py-24">
//                 {/* Section Header */}
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16">
//                         <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full mb-4">
//                             <span className="text-teal-600 font-medium text-sm tracking-wide">🏨 EXPLORE OUR HOTEL</span>
//                         </div>
//                         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                             Find the Perfect
//                             <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent"> Experience </span>
//                             for You
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                             Discover unparalleled luxury with our world-class amenities, award-winning services, 
//                             and breathtaking accommodations designed to create unforgettable memories.
//                         </p>
//                     </div>

//                     {/* Features Grid */}
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//                         {[
//                             {
//                                 icon: (
//                                     <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21H3m16 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4" />
//                                     </svg>
//                                 ),
//                                 title: "Award-winning Restaurant",
//                                 description: "Michelin-starred cuisine with locally sourced ingredients"
//                             },
//                             {
//                                 icon: (
//                                     <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                                     </svg>
//                                 ),
//                                 title: "Wellness & Spa",
//                                 description: "Rejuvenate your body and mind with premium treatments"
//                             },
//                             {
//                                 icon: (
//                                     <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
//                                     </svg>
//                                 ),
//                                 title: "Luxury Suites",
//                                 description: "Individually designed rooms with panoramic city views"
//                             }
//                         ].map((feature, index) => (
//                             <div key={index} className="group text-center space-y-6 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-teal-50 hover:to-purple-50 transition-all duration-300">
//                                 <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
//                                     {feature.icon}
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
//                                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* CTA Section */}
//                     {/* <div className="relative bg-gradient-to-r from-teal-600 to-purple-600 rounded-3xl p-12 overflow-hidden">
//                         <div className="absolute inset-0 bg-black/10"></div>
//                         <div className="relative grid lg:grid-cols-2 gap-12 items-center">
//                             <div className="text-white space-y-6">
//                                 <h3 className="text-3xl lg:text-4xl font-bold">
//                                     Experience Luxury Like Never Before
//                                 </h3>
//                                 <p className="text-xl text-teal-100 leading-relaxed">
//                                     Book now and enjoy exclusive benefits, premium amenities, and unforgettable moments 
//                                     that will create memories to last a lifetime.
//                                 </p>
//                                 <div className="flex flex-col sm:flex-row gap-4">
//                                     <Link 
//                                         href='/room' 
//                                         className="bg-white text-teal-600 hover:bg-gray-100 py-4 px-8 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
//                                     >
//                                         Book Your Stay
//                                     </Link>
//                                     <Link 
//                                         href='/contact' 
//                                         className="border-2 border-white text-white hover:bg-white hover:text-teal-600 py-4 px-8 rounded-full font-bold transition-all duration-300 text-center"
//                                     >
//                                         Get In Touch
//                                     </Link>
//                                 </div>
//                             </div>
                            
//                             <div className="relative h-[300px] rounded-2xl overflow-hidden">
//                                 <Image 
//                                     src="/card.jpg" 
//                                     alt="Hotel Luxury Experience" 
//                                     fill 
//                                     className="object-cover"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                
//                             </div>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

import React from 'react';

const Hero = () => {
    return (
        <div className="relative min-h-screen py-30">
            {/* Main Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20"></div>
                </div>

                {/* Main Content */}
                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-screen py-20">
                        
                        {/* Left Content - 6 columns */}
                        <div className="lg:col-span-6 space-y-8 text-white">
                            {/* Badge */}
                            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                                <div className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-teal-300 font-medium text-sm tracking-wider">LUXURY HOSPITALITY</span>
                            </div>
                            
                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                                    Experience
                                    <br />
                                    <span className="bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent">
                                        Luxury
                                    </span>
                                    <br />
                                    Redefined
                                </h1>
                                
                                <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl">
                                    Immerse yourself in unparalleled comfort and sophistication. Every detail crafted to create extraordinary moments.
                                </p>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a href="/room">
                                <button className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-3">
                                    Book Your Stay
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                </a>
                                
                                <button className="group border border-white/20 text-white hover:bg-white/5 py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3">
                                    Contact
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-teal-300">5.0</div>
                                    <div className="text-xs text-slate-400">★★★★★</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">200+</div>
                                    <div className="text-xs text-slate-400">Happy Guests</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">24/7</div>
                                    <div className="text-xs text-slate-400">Concierge</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image - 6 columns */}
                        <div className="lg:col-span-6">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                                    <img 
                                        src="/2.jpg" 
                                        alt="Luxury Hotel Pool" 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full mb-6">
                            <span className="text-teal-600 font-medium text-sm tracking-wider">AMENITIES & SERVICES</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Crafted for Your
                            <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent"> Perfect Stay</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Every amenity and service is designed to exceed your expectations and create unforgettable memories.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M5 21H3m16 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4" />
                                    </svg>
                                ),
                                title: "Fine Dining",
                                description: "Award-winning restaurant with world-class chefs and locally sourced ingredients."
                            },
                            {
                                icon: (
                                    <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                ),
                                title: "Wellness Spa",
                                description: "Rejuvenate your body and soul with our premium spa treatments and wellness programs."
                            },
                            {
                                icon: (
                                    <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                ),
                                title: "Luxury Suites",
                                description: "Elegantly designed suites with breathtaking views and premium amenities."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group p-8 rounded-2xl hover:bg-slate-50 transition-all duration-300 text-center">
                                <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <a href="/room">
                        <button className="bg-slate-900 text-white hover:bg-slate-800 py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                            Explore All Amenities
                        </button>    
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;