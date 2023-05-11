"use client";
import sentMessage from "@/app/guestbook/actions";
import {useRef} from "react";

export default function MessageForm() {

    const formRef = useRef(null)

    const handleSubmit = async (formData) => {

        const {name, message} = Object.fromEntries(formData.entries())
        // @ts-ignore
        // await sql`INSERT INTO entries (name, message) VALUES (${name}, ${message});`
        await sentMessage(name, message)


        alert("Thanks for the message")

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        // @ts-ignore
        <form ref={formRef} action={handleSubmit} className={"flex lg:flex-row flex-col w-full justify-between gap-2"}>
            <input required type="text" name="name" id="name" placeholder={"Your Name"} className={"flex-3 p-1 rounded-sm text-black"} />
            <input required type="text" name="message" id="message" placeholder={"Your Message"} className={"flex-1 p-1 rounded-sm text-black"} />
            <button type="submit" className={"p-2 rounded-sm bg-[#121212] dark:bg-[#f2f2f2] text-white dark:text-black hover:scale-105"}>Submit</button>
        </form>
    )
}