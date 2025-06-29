import CheckoutDetail from "@/components/checkout-detail"
import { promises } from "dns"

const CheckOutPage = async ({params} : {params: Promise}) => {
    return(
        <div className="max-w-screen-xl px-4 mx-auto py-50 mt-12">
            <h1>CheckOut Page</h1>
            <CheckoutDetail/>
        </div>
    )
}
export default CheckOutPage