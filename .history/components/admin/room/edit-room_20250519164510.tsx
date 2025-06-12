

import { getAmenities, getRoomById } from "@/lib/data";
import EditForm from "@/components/admin/room/edit-form";
import { notFound } from "next/navigation";

const EditRoom = async ({ roomId }: { roomId: string }) => {
  const [amenities, room] = await Promise.all([
    getAmenities(), 
    getRoomById(roomId)
  ]);
  
  if (!amenities|| room) return null;
  
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-600 mb-4">Edit a Room</h1>
      <EditForm amenities={amenities} room={room} />
    </div>
  );
};

export default EditRoom;