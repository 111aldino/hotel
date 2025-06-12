import {object, string } from 'zod';

export const ContactSchema = object({
    name: string().min(7, "Nmae ")
})