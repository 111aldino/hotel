import HeaderSection from "@/components/header_section"
import { Metadata } from "next"
import { RxFontRoman } from "react-icons/rx"
import HeaderSection from "@/components/header_section"

export const metadata: Metadata = {
    title: "Contact"
}

const ContactPagae = () => {
    return(
        <div className="">
            <HeaderSection title="Contact Us" subTitle="Lorem ipsum dolor sit amet."/>
        </div> 
    )
}