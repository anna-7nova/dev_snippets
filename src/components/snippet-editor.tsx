"use client"

import type { Spippet } from "../../node_modules/.prisma/client"
import Editor from '@monaco-editor/react';
import { updateSnippet } from "../app/actions";
import { useState } from "react";

type SnippetEditorProps = {
    snippet: Spippet;
}

export default function SnippetEditor({ snippet }: SnippetEditorProps) {
    const [code, setCode] = useState(snippet.code);
    const handleEditorChange = (value: string = "") => {
        setCode(value);
    }

    const handleSubmit = () => {
        updateSnippet(snippet.id, code);
    }

    return (
        <>
            <Editor
                height="50vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={snippet.code}
                onChange={handleEditorChange}
            />
            <button className="border p-2 border-rounded" onClick={handleSubmit}>Save</button>
        </>
    )
}