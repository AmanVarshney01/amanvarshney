"use client";
import {FormEvent} from "react";

export default function MessageForm() {

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const {name, message} = Object.fromEntries(formData.entries())

        fetch('/api/messages', {
            method: 'POST',
            body: JSON.stringify({name, message}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            form.reset()

        }).catch(() => {
            console.log("Error")
        })
    }

    return (
        <form onSubmit={handleSubmit} className={"flex flex-row w-full justify-between gap-2"}>
            <input required type="text" name="name" id="name" placeholder={"Your Name"} className={"flex-3 p-1 rounded-sm"} />
            <input required type="text" name="message" id="message" placeholder={"Your Message"} className={"flex-1 p-1 rounded-sm"} />
            <button type="submit" className={"p-2 rounded-sm bg-[#121212] dark:bg-[#f2f2f2] text-white dark:text-black hover:scale-105"}>Submit</button>
        </form>
    )
}