import CheckoutDetail from "@/components/checkout-detail"

const CheckOutPage = async ({params} : {params: promi}) => {
    return(
        <div className="max-w-screen-xl px-4 mx-auto py-50 mt-12">
            <h1>CheckOut Page</h1>
            <CheckoutDetail/>
        </div>
    )
}
export default CheckOutPage