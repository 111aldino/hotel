import HeaderSection from "@/components/header_section"
import Image from "next/image"
import { IoEyeOutline,IoLocateOutline } from "react-icons/io5"

const AboutPage = () =>{
    return(
        <div className="">
            <HeaderSection title="About us" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing."/> 
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src='/foto_about.jpg' width={650} height={579} alt="about image"/>
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-900 mb-4">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-gray-700 py-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea asperiores dolore officia vitae ipsam pariatur cumque porro veritatis commodi.</p>
                        <ul className="list-item space-y-6 pt-8">
                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoEyeOutline className="size-7"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Vision : </h4>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatibus?</p>
                                </div>
                            </li>

                            <li className="flex gap-5">
                                <div className="flex-none mt-1">
                                    <IoLocateOutline className="size-7"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold mb-1">Mission : </h4>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatibus?</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage