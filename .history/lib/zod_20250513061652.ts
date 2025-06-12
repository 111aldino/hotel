import {object, string } from 'zod';

export const ContactSchema = object({
    name: string().min(4, "Name must be at least 4 characters long"),
    email: string().min(6, )
})