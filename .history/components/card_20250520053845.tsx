import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";
import { Room } from "@prisma/client";
import { formatCurreccy } from "@/lib/utils";

const Card = ({room}: {room: Room}) => {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
      <div className="h-[260px] w-auto rounded-t-sm relative">
        <Image
          src={room.image}
          width={200}
          height={100}
          alt="room image"
          className="w-full h-full object-cover rounded-t-sm"
        />
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-medium">
          <Link
            href={`/room/${room.id}`}
            className="hover:text-gray-800 transition duration-150"
          >
            {room.name}
          </Link>
        </h4>
        <h4 className="text-2xl mb-7">
          <span className="font-semibold text-gray-600">
            {formatCurreccy(room.price)}
          </span>

          <span className="text-gray-400 text-sm">/Malam</span>
        </h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoPeopleOutline />
            <span>{room.capacity} {room.capacity === 1 ? "person" : "people"}</span>
          </div>
          <Link
            href={``}
            className="px-6 py-2.5 md:px-10 md-py-3 font-semibold text-white bg-teal-400 rounded-sm hover:bg-violet-500 transition duration-150"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
