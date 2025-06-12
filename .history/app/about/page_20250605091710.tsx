// import HeaderSection from "@/components/header_section"
// import Image from "next/image"
// import { IoEyeOutline,IoLocateOutline } from "react-icons/io5"

// const AboutPage = () =>{
//     return(
//         <div className="">
//             <HeaderSection title="About us" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing."/> 
//             <div className="max-w-screen-xl mx-auto py-20 px-4">
//                 <div className="grid md:grid-cols-2 gap-8">
//                     <Image src='/foto_about.jpg' width={650} height={579} alt="about image"/>
//                     <div>
//                         <h1 className="text-5xl font-semibold text-gray-900 mb-4">Lorem ipsum dolor sit amet.</h1>
//                         <p className="text-gray-700 py-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea asperiores dolore officia vitae ipsam pariatur cumque porro veritatis commodi.</p>
//                         <ul className="list-item space-y-6 pt-8">
//                             <li className="flex gap-5">
//                                 <div className="flex-none mt-1">
//                                     <IoEyeOutline className="size-7"/>
//                                 </div>
//                                 <div className="flex-1">
//                                     <h4 className="text-lg font-semibold mb-1">Vision : </h4>
//                                     <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatibus?</p>
//                                 </div>
//                             </li>

//                             <li className="flex gap-5">
//                                 <div className="flex-none mt-1">
//                                     <IoLocateOutline className="size-7"/>
//                                 </div>
//                                 <div className="flex-1">
//                                     <h4 className="text-lg font-semibold mb-1">Mission : </h4>
//                                     <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatibus?</p>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AboutPage

import Image from "next/image"
import { IoEyeOutline, IoRocketOutline } from "react-icons/io5"

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-40">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Section with enhanced styling */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Image 
                                src='/foto_about.jpg' 
                                width={650} 
                                height={579} 
                                alt="about image"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Crafting Digital
                                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Excellence
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                We believe in creating extraordinary digital experiences that inspire, engage, and transform businesses through innovative solutions and creative excellence.
                            </p>
                        </div>

                        {/* Vision & Mission Cards */}
                        <div className="space-y-6 pt-8">
                            {/* Vision Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <IoEyeOutline className="w-8 h-8 text-white"/>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                To be the leading force in digital innovation, empowering businesses worldwide with cutting-edge solutions that drive growth and success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mission Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <IoRocketOutline className="w-8 h-8 text-white"/>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                To deliver exceptional digital experiences through innovative design, robust technology, and unwavering commitment to client success and satisfaction.
                                            </p>
                                        </div>
                                    </div>
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