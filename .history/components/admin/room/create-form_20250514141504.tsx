// "use client";
// import { useRef, useState, useTransition } from "react";
// import { IoCloudUploadOutline } from "react-icons/io5";
// import { type PutBlobResult } from "@vercel/blob";
// import Image from "next/image";
// import { BarLoader } from "react-spinners";

// const CreateForm = () => {
//   const inputFileRef = useRef<HTMLInputElement>(null);
//   const [image, setImages] = useState("");
//   const [message, setMessage] = useState("");
//   const [pending, setTransition] = useTransition();

//   const handleUpload = () => {
//     if (!inputFileRef.current?.files) return null;
//     const file = inputFileRef.current.files[0];
//     const formData = new FormData();
//     formData.set("file", file);
//     setTransition(async () => {
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
//   return (
//     <form action="">
//       <div className="grid md:grid-cols-12 gap-5">
//         <div className="col-span-8 bg-white p-4">
//           <div className="mb-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Room Name"
//               className="py-2 px-4 rounded-sm border border-teal-500 w-full"
//             />
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">message</span>
//             </div>
//           </div>

//           <div className="mb-4">
//             <textarea
//               name="description"
//               rows={8}
//               placeholder="description"
//               className="py-2 px-4 rounded-sm border border-teal-500 w-full"
//             ></textarea>
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">message</span>
//             </div>
//           </div>

//           <div className="mb-4 grid md:grid-cols-3">
//             <input
//               type="checkbox"
//               name="amenities"
//               placeholder="Room Name"
//               className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-600 rounded"
//             />
//             <label className="ms-2 text-sm font-medium text-gray-800 capitalize">
//               Spa
//             </label>
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">message</span>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-4 bg-white p-4">
//           <label
//             htmlFor="input-file"
//             className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative"
//           >
//             <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
//               <div className="flex flex-col items-center justify-center">
//                 {pending ? <BarLoader /> : null}
//                 <IoCloudUploadOutline className="size-8" />
//                 <p className="mb-1 text-sm font-bold">Select Images</p>
//                 {message ? (
//                   <p className="text-xs text-red-500">{message}</p>
//                 ) : (
//                   <p className="text-xs">
//                     SVG, PNG, JPG, GIF OR OTHER (MAX : 4GB)
//                   </p>
//                 )}
//               </div>
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
//               placeholder="Capacity"
//               className="py-2 px-4 rounded-sm border border-teal-500 w-full"
//             />
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">message</span>
//             </div>
//           </div>

//           <div className="mb-4">
//             <input
//               type="text"
//               name="price"
//               placeholder="Price"
//               className="py-2 px-4 rounded-sm border border-teal-500 w-full"
//             />
//             <div aria-live="polite" aria-atomic="true">
//               <span className="text-sm text-red-500 mt-2">message</span>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-teal-400 text-white w-full hover:bg-violet-600 py-2.5 px-6 md:px-10 text-lg font-semibold cursor-pointer"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };
// export default CreateForm;

"use client";
import { useRef, useState, useTransition } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { type PutBlobResult } from "@vercel/blob";
import Image from "next/image";
import { BarLoader } from "react-spinners";

const CreateForm = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [uploadProgress, setUploadProgress] = useState(0);
  
  // Form validation states
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [capacityError, setCapacityError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [amenitiesError, setAmenitiesError] = useState("");

  // Fungsi untuk mengompres gambar sebelum upload
  const compressImage = async (file: File): Promise<Blob> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          // Maksimum dimensi
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          
          let width = img.width;
          let height = img.height;
          
          // Resize gambar jika lebih besar dari dimensi maksimum
          if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
            width *= ratio;
            height *= ratio;
          }
          
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          
          // Konversi ke blob dengan kualitas 0.8 (80%)
          canvas.toBlob(
            (blob) => {
              if (blob) resolve(blob);
            },
            file.type,
            0.8
          );
        };
      };
    });
  };

  const handleUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    
    // Validasi ukuran file (maksimum 5MB)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_FILE_SIZE) {
      setMessage(`Ukuran file terlalu besar (maksimum 5MB)`);
      return;
    }
    
    // Validasi tipe file
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      setMessage('Hanya file JPG, PNG, GIF, atau SVG yang diizinkan');
      return;
    }
    
    setMessage("");
    setUploadProgress(0);
    
    startTransition(async () => {
      try {
        // Kompres gambar sebelum upload
        const compressedFile = await compressImage(file);
        
        const formData = new FormData();
        formData.set("file", compressedFile);
        
        // Gunakan XMLHttpRequest untuk mendapatkan progress upload
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', '/api/upload', true);
        
        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(progress);
          }
        };
        
        xhr.onload = async () => {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const img = data as PutBlobResult;
            setImage(img.url);
            setUploadProgress(100);
          } else {
            try {
              const errorData = JSON.parse(xhr.responseText);
              setMessage(errorData.message || 'Upload gagal');
            } catch {
              setMessage('Upload gagal. Silakan coba lagi.');
            }
          }
        };
        
        xhr.onerror = () => {
          setMessage('Koneksi terputus. Silakan coba lagi.');
        };
        
        xhr.send(formData);
      } catch (error) {
        console.log(error);
        setMessage("Error saat mengompres gambar. Silakan coba lagi.");
      }
    });
  };
  
  return (
    <form action="">
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Room Name"
              className="py-2 px-4 rounded-sm border border-teal-500 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              {nameError && <span className="text-sm text-red-500 mt-2">{nameError}</span>}
            </div>
          </div>

          <div className="mb-4">
            <textarea
              name="description"
              rows={8}
              placeholder="description"
              className="py-2 px-4 rounded-sm border border-teal-500 w-full"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              {descriptionError && <span className="text-sm text-red-500 mt-2">{descriptionError}</span>}
            </div>
          </div>

          <div className="mb-4 grid md:grid-cols-3">
            <input
              type="checkbox"
              name="amenities"
              placeholder="Room Name"
              className="w-4 h-4 text-blue-700 bg-gray-100 border-gray-600 rounded"
            />
            <label className="ms-2 text-sm font-medium text-gray-800 capitalize">
              Spa
            </label>
            <div aria-live="polite" aria-atomic="true">
              {amenitiesError && <span className="text-sm text-red-500 mt-2">{amenitiesError}</span>}
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-white p-4">
          <label
            htmlFor="input-file"
            className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative"
          >
            <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
              <div className="flex flex-col items-center justify-center">
                {isPending ? <BarLoader /> : null}
                <IoCloudUploadOutline className="size-8" />
                <p className="mb-1 text-sm font-bold">Select Images</p>
                {message ? (
                  <p className="text-xs text-red-500">{message}</p>
                ) : (
                  <p className="text-xs">
                    SVG, PNG, JPG, GIF OR OTHER (MAX : 4GB)
                  </p>
                )}
              </div>
            </div>

            {!image ? (
              <input
                type="file"
                id="input-file"
                onChange={handleUpload}
                className="hidden"
                ref={inputFileRef}
              />
            ) : (
              <Image
                src={image}
                alt="image"
                width={300}
                height={200}
                className="absolute aspect-video object-cover rounded-md"
              />
            )}
          </label>

          <div className="mb-4">
            <input
              type="text"
              name="capacity"
              placeholder="Capacity"
              className="py-2 px-4 rounded-sm border border-teal-500 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              {capacityError && <span className="text-sm text-red-500 mt-2">{capacityError}</span>}
            </div>
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="py-2 px-4 rounded-sm border border-teal-500 w-full"
            />
            <div aria-live="polite" aria-atomic="true">
              {priceError && <span className="text-sm text-red-500 mt-2">{priceError}</span>}
            </div>
          </div>

          <button
            type="submit"
            className="bg-teal-400 text-white w-full hover:bg-violet-600 py-2.5 px-6 md:px-10 text-lg font-semibold cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
export default CreateForm;