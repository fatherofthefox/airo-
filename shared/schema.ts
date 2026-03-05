import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We are building a serverless landing page without a complex database.
// This dummy table satisfies the default Drizzle/Postgres setup for the template.
export const dummy = pgTable("dummy", {
  id: serial("id").primaryKey(),
});

export const insertDummySchema = createInsertSchema(dummy);
export type InsertDummy = z.infer<typeof insertDummySchema>;
export type Dummy = typeof dummy.$inferSelect;
