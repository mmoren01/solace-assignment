import { getAllAdvocates, searchAdvocates } from "../../../queries/advocate-queries";

export async function GET() {
  const data = await getAllAdvocates();
  return Response.json({ data });
}

export async function POST(request: Request) {
  const { searchTerm } = await request.json();
  const data = await searchAdvocates(searchTerm);
  return Response.json({ data });
};
