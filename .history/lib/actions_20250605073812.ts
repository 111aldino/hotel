"use server"

import { ContactSchema, RoomSchema } from "@/lib/zod"
import { prisma } from "@/lib/prisma"
import { error, log } from "console";
import { redirect } from "next/navigation"
import { del } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export const SaveRoom = async (
  image: string,
  prevState: unknown,
  formData: FormData
) => {
  if (!image)
    return {
      message: "image is required",
    }

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  }

  const validatedFields = RoomSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, description, price, capacity, amenities } =
    validatedFields.data

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        price,
        capacity,
        image,
        RoomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
            })),
          },
        },
      },
    })
  } catch (error) {
    console.error(error)
  }

  redirect("/admin/room")
}

// ini menu contactmessage

export const ContactMessage = async (
  prevState: unknown,
  formData: FormData
) => {
  const validatedFields = await ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, subject, message } = validatedFields.data

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    })

    return {
      message: "Message sent successfully",
    }
  } catch (error) {
    console.error(error)
  }
}

// ini delete roomm
export const deleteRoom = async (id: string, image: string) => {
  try {
    await del(image);
    await prisma.room.delete ({
      where:{id}
    })
  } catch (error) {
    console.log(error)
  }

  revalidatePath("/admin/room")
  

}

// ini update room

export const UpdateRoom = async (
  image: string,
  roomId: string,
  prevState: unknown,
  formData: FormData
) => {
  if (!image)
    return {
      message: "image is required",
    }

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities"),
  };

  const validatedFields = RoomSchema.safeParse(rawData)
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, description, price, capacity, amenities } =
    validatedFields.data

  try {
   await prisma.$transaction([
    prisma.room.update({
      where: {id: roomId},
      data:{
        name,
        description,
        image,
        price,
        capacity,
        RoomAmenities:{
          deleteMany: {}
        }
      }
    }),
    prisma.roomAmenities.createMany({
      data: amenities.map((item) => ({
        roomId,
        amenitiesId: item
      }))
    })
   ])
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/admin/room")

  redirect("/admin/room")
}


export const createReserve = async (
  roomId: string,
  price: number,
  startDate: Date,
  endDate: Date,
  
) => {
  
  

};
