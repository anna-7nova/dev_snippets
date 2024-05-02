import SnippetCreatePage from "@/app/snippets/new/page";
import { PrismaClient } from "../../node_modules/.prisma/client/index";

export const db = new PrismaClient()

// db.spippet.create({
//     data:{
//         title: "First snippet",
//         code: "const first = 'code'"
//     }
// })