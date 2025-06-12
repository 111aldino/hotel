"use client"
import { useState } from "react"
import { addDays } from "date-fns"
import DatePicker from "react-datepicker"

const ReserveForm = () =>{

    const StartDate = new Date()
    const EndDate = addDays(StartDate, 1)

    const [startDate, setstartDate] = useState(StartDate)
    const [endDate, setendDate] = useState(EndDate)

    const handleDateChange = (dates : any) =>{
        const [start, end] = dates
        setstartDate(start)
        setendDate(end)
    }

    return(
        <form action="">
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Arivval - Departure</label>
                <DatePicker 
                    selected={startDate}
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    selectsRange={true}
                    onChange={handleDateChange}
                    dateFormat={"dd-MM-YYYY"}
                    wrapperClassName="w-full"
                    className="py-2 px-4 rounded-md border border-gray-300 w-full"
                 />
                 <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">messege</p>
                 </div>
            </div>

            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                    <input type="text" name="name" className="py-2 px-4 rounded-md border border-gray-300 w-full" f />
                 <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">messege</p>
                 </div>
            </div>
        </form>
    )
}

export default ReserveForm