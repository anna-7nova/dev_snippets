import { db } from "../../../db";
import { redirect } from "next/navigation";
export default function SnippetCreatePage() {
    async function createSnippet(formData: FormData) {
        // сказать next.js что это server action
        "use server";
        // забрать данные с формы и провалидировать
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;
        // создать запись в базе данных
        const snippet = await db.spippet.create({
            data: {
                title,
                code
            }
        })

        console.log(snippet);
        // redirect на главную страницу
        redirect("/");
    }
    return (
        <form action={createSnippet} >
            <h1>Create a snippet</h1>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label htmlFor="title" className="w-12">Title:</label>
                    <input id="title" className="border w-full p-2 rounded" name="title" type="text" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label htmlFor="code" className="w-12">Code:</label>
                    <textarea id="code" className="border w-full p-2 rounded" name="code" type="text" />
                </div>
            </div>
            <button className="rounded bg-blue-200 p-2" type="submit">Save</button>
        </form>
    );
}
