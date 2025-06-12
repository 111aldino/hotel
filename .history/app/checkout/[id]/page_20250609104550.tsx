import CheckoutDetail from "@/components/checkout-detail"
import { Suspense } from "react"
import { Metadata } from "next"


// export const metadata:Metadata = {
//     title: "reservation Page"
// }

const CheckOutPage = async ({params} : {params: Promise<{id: string}>}) => {

    const reservationId = ((await params).id)

    return(
        <div className="max-w-screen-xl px-4 mx-auto py-50 mt-12">
            <Suspense fallback={<p>Loading...</p>}>
                 <CheckoutDetail reservationId={reservationId}/>
            </Suspense>
        </div>
    )
}
export default CheckOutPage