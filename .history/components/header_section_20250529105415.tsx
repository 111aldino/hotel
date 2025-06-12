import Image from "next/image"

const HeaderSection = ({
    title,
    subTitle
}:{
    title : string,
    subTitle : string
}
) =>{
    return (
    <header className="relative h-100 pt-20 text-white overflow-hidden">
        <div className="absolute inset-0">
            <Image src='/2.jpg' alt="header image" fill className="object-cover object-center w-full h-full"/>
            <div className="absolute inset-0 bg-black opacity-78"></div>

        </div>
        <div className="relative flex flex-col justify-center items-center h-full text-center pt-20">
            <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
            <p className="text-xl text-gray-300">{subTitle}</p>
        </div>
    </header>
)}

export default HeaderSection