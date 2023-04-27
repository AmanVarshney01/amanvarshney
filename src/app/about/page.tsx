export default function Page() {
    return (
        <main className="w-full h-full ">
            <div className={"w-full flex flex-col gap-4 lg:p-10 p-6"}>
                <h1 className={"text-3xl"}>About Me</h1>
                {/*<p className={"leading-8 text-justify"}> .</p>*/}
                <ul className={"leading-8 text-justify list-disc flex flex-col gap-4"}>
                    <li>Hi, I'm Aman Varshney, a first-year student pursuing a Bachelor of Technology in Computer Science and Engineering at GLA University.</li>
                    <li>I was born and brought up in Chandausi, Uttar Pradesh, India. However, I have spent most of my life in Delhi, where I grew up and lived for 17 years. Recently, I have relocated to Ghaziabad.</li>
                    <li>I was a member of Geeks for Geeks Student Chapter for 5 months.</li>
                </ul>
            </div>
        </main>
    )
}