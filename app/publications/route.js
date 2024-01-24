import publication_list from "@/public/publication_list";

export async function GET() {
    return Response.json(publication_list)
}  