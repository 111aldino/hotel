import Image from "next/image"
import { IoEyeOutline, IoRocketOutline, IoSparklesOutline } from "react-icons/io5"

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden py-24 lg:py-45">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content Section */}
                        <div className="space-y-8 lg:order-1">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                    <IoSparklesOutline className="w-4 h-4" />
                                    About Our Company
                                </div>
                                
                                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                    Crafting Digital
                                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        Excellence
                                    </span>
                                </h1>
                                
                                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                                    We transform businesses through innovative digital solutions, creating extraordinary experiences that inspire and engage.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100+</div>
                                    <div className="text-gray-600 text-sm lg:text-base">Projects Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">50+</div>
                                    <div className="text-gray-600 text-sm lg:text-base">Happy Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">5+</div>
                                    <div className="text-gray-600 text-sm lg:text-base">Years Experience</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative group lg:order-2">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image 
                                    src='/about.jpg' 
                                    width={650} 
                                    height={579} 
                                    alt="About our company"
                                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Mission Section */}
            <div className="py-24 bg-white/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-blue-600">Purpose</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {Driven by passion and guided by innovation, we're committed to excellence in everything we do.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 h-full">
                                <div className="flex flex-col items-center text-center space-y-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <IoEyeOutline className="w-10 h-10 text-white"/>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        To be the leading force in digital innovation, empowering businesses worldwide with cutting-edge solutions that drive sustainable growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 h-full">
                                <div className="flex flex-col items-center text-center space-y-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <IoRocketOutline className="w-10 h-10 text-white"/>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        To deliver exceptional digital experiences through innovative design, robust technology, and unwavering commitment to client success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage