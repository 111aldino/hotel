import { subscribe } from 'diagnostics_channel';
import {object, string } from 'zod';

export const ContactSchema = object({
    name: string().min(4, "Name must be at least 4 characters long"),
    email: string().min(5, "Email must be at least 5 characters long").email("Invalid email address"),
    subject: string().min(4, "Subject must be at least 7 characters long"),
    message: string().min(50, "Message must be at least 50 characters long").max(200, "Message must be at most 200 characters long"),
})