"use client"
import { useState } from "react"
import { addDays } from "date-fns"
import DatePicker from "react-datepicker"

const ReserveForm = () =>{

    const StartDate = new Date()
    

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
                    dateFormat={"dd-MM-YYYY"}
                    wrapperClassName="w-full"
                    className="py-2 px-4 rounded-md border border-gray-300 w-full"
                 />
                 <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">messege</p>
                 </div>
            </div>
        </form>
    )
}

export default ReserveForm