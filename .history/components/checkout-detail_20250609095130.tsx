// import Image from "next/image"
// import { getReservationlById } from "@/lib/data"
// import { formatDate } from "@/lib/utils"
// import { differenceInCalendarDays } from "date-fns"
// import { formatCurreccy } from "@/lib/utils"

// const CheckoutDetail = async ({ reservationId }: { reservationId: string }) => {
//   const reservation = await getReservationlById(reservationId)
//   if (!reservation || !reservation.Payment)
//     return <h1>No Reservation Found</h1>

//   const duration = differenceInCalendarDays(reservation.endDate, reservation.startDate)

//   return (
//     <div className="grid md:grid-cols-2 gap-5">
//       <div className="order-2">
//         <div className="flex flex-col mb-3 items-start bg-white border border-gray-200 rounded-sm md:flex-row md:w-full">
//           <div className="aspect-video relative">
//             <Image
//               src={reservation.Room.image}
//               width={500}
//               height={300}
//               className="object-cover w-full rounded-t-sm aspect-video md:rounded-none md:rounded-s-sm"
//               alt="image"
//             />
//           </div>

//         <div className="flex flex-col justify-between p-4 leading-normal  w-full">
//             <h5 className="mb-1 text-4xl font-bold tracking-tight text-gray-900">{reservation.Room.name}</h5>
//             <div className="flex items-center gap-1 text-2xl text-gray-700">
//                 <div className="flex items-center justify-center gap-1 ">
//                     <span className="text-2xl">
//                         {formatCurreccy(reservation.price)}
//                     </span>
//                     <span>/ nigth</span>
//                 </div>
//             </div>
//         </div>
//         </div>

//         {/* tombol payment */}

//       </div>
//       <div className="border border-gray-200 px-3 py-5 bg-white rounded-sm">
//         <table className="w-full ">
//             <tbody>
//                 <tr>
//                     <td className="py-2">Reservation ID</td>
//                     <td className="py-2 text-right truncate">#{reservation.id}</td>
//                 </tr>

//                 <tr>
//                     <td className="py-2">Name</td>
//                     <td className="py-2 text-right truncate">{reservation.User.name}</td>
//                 </tr>

//                 <tr>
//                     <td className="py-2">Email</td>
//                     <td className="py-2 text-right truncate">{reservation.User.email}</td>
//                 </tr>

//                 <tr>
//                     <td className="py-2">Phone Number</td>
//                     <td className="py-2 text-right truncate">{reservation.User.phone}</td>
//                 </tr>

//                 <tr>
//                     <td className="py-2">Arivval</td>
//                     <td className="py-2 text-right truncate">{formatDate(reservation.startDate.toISOString())}</td>
//                 </tr>

//                 <tr>
//                     <td className="py-2">Depature</td>
//                     <td className="py-2 text-right truncate">{formatDate(reservation.endDate.toISOString())}</td>
//                 </tr>

//                 <tr>
//                     <td className="py-2">Duration</td>
//                     <td className="py-2 text-right truncate">
//                         <span>
//                         {duration} {duration <= 1 ? "Night" : "Ngihts"}
//                         </span>
//                     </td>
//                 </tr>

//                 <tr>
//                     <td className="py-2">Amount In Rupiah</td>
//                     <td className="py-2 text-right truncate">
//                         <span>
//                             {formatCurreccy(reservation.Payment.amount)}
//                         </span>
//                     </td>
//                 </tr>

//                 <tr>
//                     <td className="py-2">Status</td>
//                     <td className="py-2 text-right truncate">
//                         <span>
//                             {reservation.Payment.status}
//                         </span>
//                     </td>
//                 </tr>

//             </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
// export default CheckoutDetail;

"use client"
import { useState, useActionState } from "react"
import { addDays } from "date-fns"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { createReserve } from "@/lib/actions"
import { RoomDetailProps } from "@/types/room"
import clsx from "clsx"


const ReserveForm = ({room}: {room:RoomDetailProps}) => {
  const StartDate = new Date()
  const EndDate = addDays(StartDate, 1)

  const [startDate, setstartDate] = useState(StartDate)
  const [endDate, setendDate] = useState(EndDate)

  const handleDateChange = (dates: any) => {
    const [start, end] = dates
    setstartDate(start)
    setendDate(end)
  }

  // Fixed: Create a wrapper function that will use current state values
  const handleFormAction = async (formData: FormData) => {
    // Add the current date values to the form data
    const actionWithDates = createReserve.bind(null, room.id, room.price, startDate, endDate)
    return actionWithDates(formData)
  }

  const [state, formAction, isPending] = useActionState(handleFormAction, null)

  // Calculate nights
  const nights = endDate && startDate ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) : 1

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-6">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-3xl">📅</span>
          Book Your Stay
        </h3>
        <p className="text-teal-50 mt-2">Reserve this room for an unforgettable experience</p>
      </div>

      {/* Pricing Info */}
      <div className="px-8 py-4 bg-gray-50 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-lg">⏰</span>
            <span className="text-sm">{nights} night{nights > 1 ? 's' : ''}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              Rp {(room.price * nights).toLocaleString('id-ID')}
            </div>
            <div className="text-sm text-gray-500">
              Rp {room.price.toLocaleString('id-ID')} per night
            </div>
          </div>
        </div>
      </div>

      <form action={formAction} className="p-8 space-y-6">
        {/* Add hidden inputs for dates */}
        <input type="hidden" name="startDate" value={startDate.toISOString()} />
        <input type="hidden" name="endDate" value={endDate.toISOString()} />
        
        {/* Date Selection */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3">
            <span className="text-teal-600 text-lg">📅</span>
            Check-in & Check-out Dates
          </label>
          <div className="relative">
            <DatePicker
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              selectsRange={true}
              onChange={handleDateChange}
              dateFormat={"dd MMM yyyy"}
              wrapperClassName="w-full"
              className="w-full py-4 px-4 text-lg border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 bg-white shadow-sm hover:border-gray-300"
              placeholderText="Select your dates"
            />
          </div>
          {state?.messageDate && (
            <div className="flex items-start gap-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              </div>
              <p className="text-sm text-red-600">{state.messageDate}</p>
            </div>
          )}
        </div>

        {/* Guest Information */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
            Guest Information
          </h4>
          
          {/* Name Field */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="text-teal-600 text-lg">👤</span>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full py-4 px-4 text-lg border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 bg-white shadow-sm hover:border-gray-300"
              placeholder="Enter your full name"
            />
            {state?.error?.name && (
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                <p className="text-sm text-red-600">{state.error.name}</p>
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <span className="text-teal-600 text-lg">📱</span>
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className="w-full py-4 px-4 text-lg border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 bg-white shadow-sm hover:border-gray-300"
              placeholder="Enter your phone number"
            />
            {state?.error?.phone && (
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                <p className="text-sm text-red-600">{state.error.phone}</p>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className={clsx(
              "w-full py-4 px-6 text-lg font-bold text-white rounded-xl transition-all duration-300 transform",
              "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700",
              "shadow-lg hover:shadow-xl hover:scale-[1.02]",
              "focus:ring-4 focus:ring-teal-200 focus:outline-none",
              {
                "opacity-75 cursor-not-allowed transform-none shadow-md": isPending,
                "hover:shadow-2xl active:scale-[0.98]": !isPending
              }
            )}
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing Reservation...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl">📅</span>
                Reserve Now - Rp {(room.price * nights).toLocaleString('id-ID')}
              </div>
            )}
          </button>
        </div>

        {/* Additional Info */}
        <div className="pt-4 border-t border-gray-100">
          <div className="bg-teal-50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
              </div>
              <div className="text-sm text-teal-800">
                <p className="font-medium mb-1">Free Cancellation</p>
                <p className="text-teal-700">Cancel up to 24 hours before check-in for a full refund.</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ReserveForm