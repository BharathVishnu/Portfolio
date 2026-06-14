import skills from "@/data/skills.json";

export async function GET() {
  return Response.json(skills);
}