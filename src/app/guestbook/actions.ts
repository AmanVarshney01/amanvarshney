'use server';
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

export default async function sentMessage(name: string, message: string) {
    await sql`INSERT INTO entries (name, message) VALUES (${name}, ${message});`
    revalidatePath('/guestbook')
}