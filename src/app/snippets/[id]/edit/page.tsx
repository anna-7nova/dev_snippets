import { db } from "../../../../db";
import { notFound } from "../../../../../node_modules/next/navigation";
import SnippetEditor from "@/components/snippet-editor"

export default async function SnippetEdit(props: any) {
    const { id } = props.params;
    const snippet = await db.spippet.findFirst({
        where: {
            id: parseInt(id)
        }
    });

    if (!snippet) {
        return notFound();
    }

    return (
        <div>

            <div className="flex m-2 justify-between item-center">
                <h1 className="text-xl font-bold">Edit</h1>

            </div >
            <SnippetEditor snippet={snippet} />
        </div>
    );
}
