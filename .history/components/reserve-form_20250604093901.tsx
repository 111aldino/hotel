import DatePicker from "react-datepicker"

const ReserveForm = () =>{

    return(
        <form action="">
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Arivval - Departure</label>
                <DatePicker 
                    selected={}
                    startDate={}
                    endDate={}
                    minDate={}
                    selectsRange={true}
                    date

                 />
            </div>
        </form>
    )
}

export default ReserveForm