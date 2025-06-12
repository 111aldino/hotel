import HeaderSection from "@/components/header_section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact"
}

const ContactPagae = () => {
    return(
        <div className="">
            <HeaderSection title="Contact Us" subTitle="Lorem ipsum dolor sit amet."/>
            <div className=",ax-w"></div>
        </div> 
    )
}