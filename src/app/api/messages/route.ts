import { sql } from "@vercel/postgres"


// export async function GET() {
//     try {
//         const { rows } = await sql`SELECT * FROM entries;`
//
//         const body = rows.map((row) => ({
//             id: row.id,
//             name: row.name,
//             message: row.message,
//             date: row.created_at
//         }))
//
//         return new Response(JSON.stringify(body), {
//             headers: { "content-type": "application/json" },
//             status: 200
//         })
//     } catch (error) {
//         console.log(error)
//         return new Response('Something went wrong.', { status: 500 })
//     }
// }

export async function POST(request: Request) {
    const {name, message} = await request.json()

    if (name == null || message == null) {
        return new Response('Please provide all fields.', { status: 400 })
    }

    try {
        await sql`INSERT INTO entries (name, message) VALUES (${name}, ${message});`

        return new Response("Message added successfully.", { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong.', { status: 500 })
    }

}