import Image from "next/image"
import { getReservationlById } from "@/lib/data"
import { formatDate } from "@/lib/utils"
import { differenceInCalendarDays } from "date-fns"
import { formatCurreccy } from "@/lib/utils"

const CheckoutDetail = async ({ reservationId }: { reservationId: string }) => {
  const reservation = await getReservationlById(reservationId)
  if (!reservation || !reservation.Payment)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold text-gray-800">No Reservation Found</h1>
          <p className="text-gray-600 mt-2">The reservation you're looking for doesn't exist.</p>
        </div>
      </div>
    )

  const duration = differenceInCalendarDays(reservation.endDate, reservation.startDate)

  const getStatusBadge = (status: string) => {
    const statusColors = {
      'PAID': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'PENDING': 'bg-amber-100 text-amber-800 border-amber-200',
      'CANCELLED': 'bg-red-100 text-red-800 border-red-200',
      'CONFIRMED': 'bg-blue-100 text-blue-800 border-blue-200',
    }
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Reservation Details</h1>
          <p className="text-gray-600">Complete information about your booking</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Room Card - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Room Image */}
              <div className="relative overflow-hidden group">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={reservation.Room.image}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    alt={reservation.Room.name} priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Room Details */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {reservation.Room.name}
                </h2>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-indigo-600">
                      {formatCurreccy(reservation.price)}
                    </span>
                    <span className="text-lg text-gray-500 font-medium">/ night</span>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total for {duration} {duration <= 1 ? 'night' : 'nights'}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatCurreccy(reservation.Payment.amount)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Details - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Booking Summary</h3>
                  <p className="text-gray-600 mt-1">Reservation #{reservation.id}</p>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${getStatusBadge(reservation.Payment.status)}`}>
                  {reservation.Payment.status}
                </div>
              </div>

              {/* Details Grid */}
              <div className="space-y-6">
                {/* Guest Information */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    Guest Information
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Name</span>
                      <span className="text-gray-900 font-semibold">{reservation.User.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Email</span>
                      <span className="text-gray-900 font-semibold truncate ml-4">{reservation.User.email}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Phone</span>
                      <span className="text-gray-900 font-semibold">{reservation.User.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Stay Information */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0h6a2 2 0 012 2v9a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z"></path>
                    </svg>
                    Stay Details
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Arrival</span>
                      <span className="text-gray-900 font-semibold">{formatDate(reservation.startDate.toISOString())}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Departure</span>
                      <span className="text-gray-900 font-semibold">{formatDate(reservation.endDate.toISOString())}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Duration</span>
                      <span className="text-gray-900 font-semibold">
                        {duration} {duration <= 1 ? 'Night' : 'Nights'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                    Payment Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Amount (IDR)</span>
                      <span className="text-2xl font-bold text-purple-600">
                        {formatCurreccy(reservation.Payment.amount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Payment Status</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusBadge(reservation.Payment.status)}`}>
                        {reservation.Payment.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {/* <div className="mt-8 space-y-3">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Download Receipt
                </button>
                <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 border border-gray-300">
                  Contact Support
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutDetail;
