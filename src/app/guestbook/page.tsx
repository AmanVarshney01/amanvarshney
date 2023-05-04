import { sql } from "@vercel/postgres";
import MessageForm from "@/app/guestbook/MessageForm";

export const revalidate = 1;

export default async function page(): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * from entries`;
    return (
        <main className={"w-full h-full"}>
            <div className={"w-full h-full flex flex-col gap-4 lg:p-10 p-6"}>
                <div id={"project-container"} className={"flex flex-col gap-4 lg:overflow-y-auto lg:max-h-[68vh]"}>
                    {rows.map((row) => (
                        <div key={row.id} className={"flex flex-row gap-4 text-lg"}>
                            <span className={"font-light capitalize"}>{row.name}:</span>
                            <p>{row.message}</p>
                        </div>
                    ))}
                </div>
                <div className={"flex-1"}></div>
                <MessageForm />
            </div>
        </main>
    );
}