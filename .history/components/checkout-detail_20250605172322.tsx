import Image from "next/image"
import { getReservationlById } from "@/lib/data"

const CheckoutDetail = async ({res}) => {
    return(
        <div className="grid md:grid-cols-2 gap-5">
            <div className="order-2">
                <div className="flex flex-col mb-3 items-start bg-white border border-gray-200 rounded-sm md:flex-row md:w-full">
                    <div className="aspect-video relative">
                        <Image src={}/>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}
export default CheckoutDetail