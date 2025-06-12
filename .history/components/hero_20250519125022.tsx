import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image src='/2.jpg' alt="hero image" fill className="object-cover object-center w-full h-full"/>
                <div className="absolute inset-0 bg-black opacity-78 "></div>
            </div>
            <div className="relative flex flex-col justify-center items-center h-full text-center pt-16">
                <h1 className="text-7xl font-bold leading-tight mb-3 capitalize">BOOK YOUR ROOM</h1>
                <p className="text-xl text-gray-300 mb-8">Get special offer just for you today</p>
                <div className="flex gap-5">
                    <Link href='/main' className="bg-teal-500 text-white hover:bg-violet-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg">Booking Now</Link>
                    <Link href='/contact' className="bg-transparent border border-teal-500 text-white hover:bg-violet-500 py-2 px-6 md:px-10 text-lg font-semibold hover:scale-105 hover:shadow-lg">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
export default Hero