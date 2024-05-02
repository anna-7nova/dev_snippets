import { db } from "../../../db";
import { notFound } from "../../../../node_modules/next/navigation";
import Link from "../../../../node_modules/next/link";

import { Button, ButtonGroup } from "@nextui-org/react";

import { deleteSnippet } from "@/app/actions/index";

export default async function SnippetView(props: any) {
    const { id } = props.params;
    const snippet = await db.spippet.findFirst({
        where: {
            id: parseInt(id)
        }
    });

    const deleteSnippetAction = deleteSnippet.bind(null, parseInt(id))

    if (!snippet) {
        return notFound();
    }

    return (
        <div>

            <div className="flex m-2 justify-between item-center">
                <h1 className="text-xl font-bold">View snippet</h1>
                <ButtonGroup>
                    <Link className="border p-2 border-rounded" href={`../../snippets/${id}/edit`}>Edit</Link>
                    <form action={deleteSnippetAction}>
                        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">Delete</Button>
                    </form>
                </ButtonGroup>
            </div >
            <pre className="p-3 border rounded bg-gray-200 border-gray-200"><code>
                {snippet.code}
            </code></pre>

        </div>
    );
}
