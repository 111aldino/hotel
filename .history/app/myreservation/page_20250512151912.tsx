import HeaderSection from "@/components/header_section"
import Image from "next/image"
const MyReservation = () => {
  return (
      <div className="">
            <HeaderSection title="My Reservation" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing."/> 
            <div className="max-w-screen-xl mx-auto py-20 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image src='/foto_about.jpg' width={650} height={579} alt="about image"/>
                </div>
            </div>
        </div>
)};
export default MyReservation;
