import { getAminities, getRoomById } from "@/lib/data";
import EditForm from "@/components/admin/room/edit-form";

const EditRoom = async ({ roomId }: { roomId: string }) => {
  const [aminities, room] = await Promise.all([
    [getAminities(), getRoomById(roomId)],
  ])
  if (!amenities) return null

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-600 mb-4">Edit a Room </h1>
      <EditForm aminities={amenities} />
    </div>
  );
};
export default EditRoom;
