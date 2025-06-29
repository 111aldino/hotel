"use server";

import { ContactSchema } from "@/lib/zod";
import { prisma } from "@/lib/prisma";

export const SaveRoom = async (image : string, prevState: unknown, from) => {

}


export const ContactMessage = async (prevState:unknown, formData: FormData) => {
  const validatedFields = await ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if(!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors};
  }

  const {name, email, subject, message} = validatedFields.data;

  try{
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message
      }
    });

    return {
      message: "Message sent successfully"
    };
  } catch (error) {
    console.error(error)
  }

};
