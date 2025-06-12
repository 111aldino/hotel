// "use client";
// import { useRef, useState, useTransition } from "react";
// import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
// import { type PutBlobResult } from "@vercel/blob";
// import Image from "next/image";
// import { BarLoader } from "react-spinners";
// import { Amenities } from "@prisma/client";
// import { useActionState } from "react";
// import { UpdateRoom } from "@/lib/actions";
// import clsx from "clsx";
// import { RoomProps } from "@/types/room";




// const EditForm = ({
//      amenities,
//      room
// }: {
//      amenities: Amenities[]
//      room: RoomProps
// }) => {

//   const inputFileRef = useRef<HTMLInputElement>(null);
//   const [image, setImages] = useState(room.image);
//   const [message, setMessage] = useState();
//   const [pending, startTransition] = useTransition();

//   const handleUpload = () => {
//     if (!inputFileRef.current?.files) return null;
//     const file = inputFileRef.current.files[0];
//     const formData = new FormData();
//     formData.set("file", file);
//     startTransition(async () => {
//       try {
//         const response = await fetch("/api/upload", {
//           method: "PUT",
//           body: formData,
//         });
//         const data = await response.json();
//         if (response.status !== 200) {
//           setMessage(data.message);
//         }
//         const img = data as PutBlobResult;
//         setImages(img.url);
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   };

//   const deleteImage = (image: string) => {
//     startTransition(async () => {
//       try {
//         await fetch(`/api/upload/?imageUrl=${image}`, {
//           method: "DELETE",
//         });
//         setImages("");
//       } catch (error) {
//         console.log(error);
//       }
//     });
//   };

//   const [state, formAction, isPending] = useActionState(UpdateRoom.bind(null, image, room.id), null)
//   const checkedAmenities = room.RoomAmenities.map((item) => item.amenitiesId)

//   return (
//     <form action={formAction}>
//       <div className="grid md:grid-cols-12 gap-5">
//         <div className="col-span-8 bg-white p-4">
//           <div className="mb-4">
//             <input
//               type="text"
//               name="name"
//               defaultValue={room.name}
//               placeholder="Room Name"
//               className="py-2 px-4 rounded-sm border border-teal-500 w-full"
//             />
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">{state?.error?.name}</span>
//             </div>
//           </div>

//           <div className="mb-4">
//             <textarea
//               name="description"
//               defaultValue={room.description}
//               rows={8}
//               placeholder="description"
//               className="py-2 px-4 rounded-sm border border-teal-500 w-full"
//             ></textarea>
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">{state?.error?.description}</span>
//             </div>
//           </div>

//           <div className="mb-4 grid md:grid-cols-3">
//             {amenities.map((item) => (
//               <div className="flex items-center mb-4" key={item.id}>
//                 <input
//                   type="checkbox"
//                   name="amenities"
//                   defaultValue={item.id}
//                   defaultChecked={checkedAmenities.includes(item.id)}
//                   placeholder="Room Name"
//                   className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-600 rounded"
//                 />
//                 <label className="ms-2 text-sm font-medium text-gray-800 capitalize">
//                   {item.name}
//                 </label>
//               </div>
//             ))}

//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">{state?.error?.amenities}</span>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-4 bg-white p-4">
//           <label
//             htmlFor="input-file"
//             className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative"
//           >
//             <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
//               {pending ? <BarLoader /> : null}
//               {image ? (
//                 <button
//                   type="button"
//                   onClick={() => deleteImage(image)}
//                   className="flex items-center justify-center bg-transparent size-6 rounded-sm absolute right-1 top-1 text-white hover:bg-red-400 "
//                 >
//                   <IoTrashOutline className="size-6 text-transparent hover:text-white" />
//                 </button>
//               ) : (
//                 <div className="flex flex-col items-center justify-center">
//                   <IoCloudUploadOutline className="size-8" />
//                   <p className="mb-1 text-sm font-bold">Select Images</p>
//                   {message ? (
//                     <p className="text-xs text-red-500">{message}</p>
//                   ) : (
//                     <p className="text-xs">
//                       SVG, PNG, JPG, GIF OR OTHER (MAX : 3MB)
//                     </p>
//                   )}
//                 </div>
//               )}
//             </div>

//             {!image ? (
//               <input
//                 type="file"
//                 id="input-file"
//                 onChange={handleUpload}
//                 className="hidden"
//                 ref={inputFileRef}
//               />
//             ) : (
//               <Image
//                 src={image}
//                 alt="image"
//                 width={300}
//                 height={200}
//                 className="absolute aspect-video object-cover rounded-md"
//               />
//             )}
//           </label>

//           <div className="mb-4">
//             <input
//               type="text"
//               name="capacity"
//               defaultValue={room.capacity}
//               placeholder="Capacity"
//               className="py-2 px-4 rounded-sm border border-teal-500 w-full"
//             />
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">{state?.error?.capacity}</span>
//             </div>
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               defaultValue={room.price}
//               name="price"
//               placeholder="Price"
//               className="py-2 px-4 rounded-sm border border-teal-500 w-full"
//             />
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">{state?.error?.price}</span>
//             </div>
//           </div>

//           {/* General Message */}
//           {state?.message ? (
//             <div className="mb-4 bg-red-200 p-2">
//               <span className="text-sm text-gray-700 mt-2">{state?.message}</span>
//             </div>
//           ): null}

//           <button
//             type="submit"
//             className={clsx("bg-teal-400 text-white w-full hover:bg-violet-600 py-2.5 px-6 md:px-10 text-lg font-semibold cursor-pointer", {
//               "opacity-50 cursor-progress ": isPending,
//             })}
//             disabled={isPending}
//           >
//             {isPending ? "Updating....." : "Update"}
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };
// export default EditForm;


"use client";
import { useRef, useState, useTransition } from "react";
import { IoCloudUploadOutline, IoTrashOutline, IoImageOutline, IoCheckmarkCircle } from "react-icons/io5";
import { type PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { BarLoader } from "react-spinners";
import { Amenities } from "@prisma/client";
import { useActionState } from "react";
import { UpdateRoom } from "@/lib/actions";
import clsx from "clsx";
import { RoomProps } from "@/types/room";

const EditForm = ({
     amenities,
     room
}: {
     amenities: Amenities[]
     room: RoomProps
}) => {

  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImages] = useState(room.image);
  const [message, setMessage] = useState();
  const [pending, startTransition] = useTransition();

  const handleUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.status !== 200) {
          setMessage(data.message);
        }
        const img = data as PutBlobResult;
        setImages(img.url);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${image}`, {
          method: "DELETE",
        });
        setImages("");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const [state, formAction, isPending] = useActionState(UpdateRoom.bind(null, image, room.id), null)
  const checkedAmenities = room.RoomAmenities.map((item) => item.amenitiesId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-6">
      <form action={formAction} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Room Details Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 
                          hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Room Information
                </h2>
                <div className="ml-auto">
                  <div className="flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    <IoCheckmarkCircle className="w-4 h-4 mr-1" />
                    Editing Mode
                  </div>
                </div>
              </div>

              {/* Room Name */}
              <div className="mb-6 group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Room Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={room.name}
                  placeholder="Enter room name"
                  className="w-full py-4 px-6 rounded-2xl border-2 border-gray-200 
                           focus:border-purple-500 focus:ring-4 focus:ring-purple-100 
                           transition-all duration-300 bg-white/50 backdrop-blur-sm
                           hover:border-gray-300 text-gray-800 placeholder-gray-400
                           group-hover:shadow-md"
                />
                <div aria-live="polite" aria-atomic="true">
                  <span className="text-sm text-red-500 mt-2 block">{state?.error?.name}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  defaultValue={room.description}
                  rows={6}
                  placeholder="Describe the room features and amenities..."
                  className="w-full py-4 px-6 rounded-2xl border-2 border-gray-200 
                           focus:border-purple-500 focus:ring-4 focus:ring-purple-100 
                           transition-all duration-300 bg-white/50 backdrop-blur-sm
                           hover:border-gray-300 text-gray-800 placeholder-gray-400
                           group-hover:shadow-md resize-none"
                ></textarea>
                <div aria-live="polite" aria-atomic="true">
                  <span className="text-sm text-red-500 mt-2 block">{state?.error?.description}</span>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Room Amenities</label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {amenities.map((item) => (
                    <div key={item.id} className="group">
                      <label className={clsx(
                        "flex items-center p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer backdrop-blur-sm",
                        checkedAmenities.includes(item.id)
                          ? "border-purple-300 bg-purple-50/70 hover:bg-purple-100/70"
                          : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 bg-white/30"
                      )}>
                        <input
                          type="checkbox"
                          name="amenities"
                          defaultValue={item.id}
                          defaultChecked={checkedAmenities.includes(item.id)}
                          className="w-5 h-5 text-purple-600 bg-white border-2 border-gray-300 
                                   rounded-lg focus:ring-purple-500 focus:ring-2 transition-all duration-200"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-800 capitalize group-hover:text-purple-700 transition-colors">
                          {item.name}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
                <div aria-live="polite" aria-atomic="true">
                  <span className="text-sm text-red-500 mt-2 block">{state?.error?.amenities}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Image Upload Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 
                          hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-4">
                <IoImageOutline className="w-6 h-6 text-purple-500 mr-3"/>
                <h3 className="text-lg font-bold text-gray-800">Room Image</h3>
                {image && (
                  <div className="ml-auto flex items-center text-green-600 text-sm">
                    <IoCheckmarkCircle className="w-4 h-4 mr-1" />
                    Updated
                  </div>
                )}
              </div>

              <label
                htmlFor="input-file"
                className="relative block w-full aspect-video rounded-2xl border-3 border-dashed 
                         border-gray-300 hover:border-purple-400 transition-all duration-300 
                         cursor-pointer bg-gradient-to-br from-gray-50 to-purple-50/30 
                         hover:from-purple-50 hover:to-pink-50 overflow-hidden group"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 z-10">
                  {pending ? (
                    <div className="flex flex-col items-center">
                      <BarLoader color="#8B5CF6" />
                      <p className="mt-2 text-sm font-medium">Updating...</p>
                    </div>
                  ) : image ? (
                    <button
                      type="button"
                      onClick={() => deleteImage(image)}
                      className="absolute top-3 right-3 p-2 bg-red-500 hover:bg-red-600 
                               rounded-full text-white shadow-lg hover:shadow-xl 
                               transform hover:scale-110 transition-all duration-200 z-20"
                    >
                      <IoTrashOutline className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                      <IoCloudUploadOutline className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                      <p className="text-sm font-bold text-gray-700">Upload New Image</p>
                      {message ? (
                        <p className="text-xs text-red-500 mt-1">{message}</p>
                      ) : (
                        <p className="text-xs text-gray-500 mt-1">
                          PNG, JPG, GIF up to 3MB
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {!image ? (
                  <input
                    type="file"
                    id="input-file"
                    onChange={handleUpload}
                    className="hidden"
                    ref={inputFileRef}
                    accept="image/*"
                  />
                ) : (
                  <Image
                    src={image}
                    alt="Room preview"
                    fill
                    className="object-cover rounded-2xl"
                  />
                )}
              </label>
            </div>

            {/* Room Details Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 
                          hover:shadow-2xl transition-all duration-500">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Room Details</h3>
              
              {/* Capacity */}
              <div className="mb-4 group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  defaultValue={room.capacity}
                  placeholder="Number of guests"
                  min="1"
                  className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 
                           focus:border-purple-500 focus:ring-4 focus:ring-purple-100 
                           transition-all duration-300 bg-white/50 backdrop-blur-sm
                           hover:border-gray-300 text-gray-800 placeholder-gray-400"
                />
                <div aria-live="polite" aria-atomic="true">
                  <span className="text-sm text-red-500 mt-1 block">{state?.error?.capacity}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price per Night</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input
                    type="number"
                    defaultValue={room.price}
                    name="price"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full py-3 pl-8 pr-4 rounded-xl border-2 border-gray-200 
                             focus:border-purple-500 focus:ring-4 focus:ring-purple-100 
                             transition-all duration-300 bg-white/50 backdrop-blur-sm
                             hover:border-gray-300 text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div aria-live="polite" aria-atomic="true">
                  <span className="text-sm text-red-500 mt-1 block">{state?.error?.price}</span>
                </div>
              </div>

              {/* General Message */}
              {state?.message && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-xl">
                  <span className="text-sm text-red-700">{state.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className={clsx(
                  "w-full py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl",
                  "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
                  "text-white transform hover:scale-[1.02] transition-all duration-300",
                  "focus:ring-4 focus:ring-purple-300 focus:outline-none",
                  {
                    "opacity-70 cursor-not-allowed animate-pulse": isPending,
                  }
                )}
                disabled={isPending}
              >
                {isPending ? (
                  <div className="flex items-center justify-center">
                    <BarLoader color="white" height={3} width={30} />
                    <span className="ml-2">Updating Room...</span>
                  </div>
                ) : (
                  "Update Room"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;