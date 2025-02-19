import db from "../db";
import { advocates } from "../db/schema";
import { eq, ilike, or, sql } from "drizzle-orm";

export async function getAllAdvocates() {
  return db.select().from(advocates);
}

export async function searchAdvocates(searchTerm: string) {
  const searchTermInt = parseInt(searchTerm, 10);

  return db
    .select()
    .from(advocates)
    // @ts-ignore - Refactor me
    .where(
      or(
        ilike(advocates.firstName, `%${searchTerm}%`),
        ilike(advocates.lastName, `%${searchTerm}%`),
        ilike(advocates.city, `%${searchTerm}%`),
        // @ts-ignore - Refactor me
        ilike(sql`payload::text`, `%${searchTerm}%`),
        eq(advocates.yearsOfExperience, isNaN(searchTermInt) ? -1 : searchTermInt),
      )
    );
}