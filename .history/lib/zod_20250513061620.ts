import {object, string } from 'zod';

export const ContactSchema = object({
    name: string().min(4, "Namae must be at least 7 characters long"),
})