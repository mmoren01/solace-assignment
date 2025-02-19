import db from "../../../db";
import { advocates } from "../../../db/schema";
import { ilike, or } from "drizzle-orm";

export async function GET() {
  const data = await db.select().from(advocates);

  return Response.json({ data });
}

export async function POST(request: Request) {
  const { searchTerm } = await request.json();

  const query = db
    .select()
    .from(advocates)
    .where(
      or(
        ilike(advocates.firstName, `%${searchTerm}%`),
        ilike(advocates.lastName, `%${searchTerm}%`)
      )
    );

  const data = await query;

  return Response.json({ data });
}
