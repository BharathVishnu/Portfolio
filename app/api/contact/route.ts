import contact from "@/data/contact.json";

export async function GET() {
  return Response.json(contact);
}