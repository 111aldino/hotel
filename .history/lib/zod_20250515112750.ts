import {object, string ,array,coerce} from 'zod';

export const RoomSchema = object({
    name: string().min(1),
    description : string().min(50),
    capacity: coerce.number().gt(0),
    price: coerce.number().gt(0),
    amenities: array(string())
})

export const ContactSchema = object({
    name: string().min(3, "Name must be at least 3 characters long"),
    email: string().min(5, "Email must be at least 5 characters long").email("Invalid email address"),
    subject: string().min(4, "Subject must be at least 4 characters long"),
    message: string().min(10, "Message must be at least 10 characters long").max(200, "Message must be at most 200 characters long"),
})