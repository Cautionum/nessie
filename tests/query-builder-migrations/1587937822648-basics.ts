import { Migration, DBDialects } from "../../mod.ts";
import { Schema } from "../../qb.ts";

const dialect = Deno.env.get("DB_DIALECT") as DBDialects;

export const up: Migration = () => {
  return new Schema(dialect).create("basics", (table) => {
    table.id();
    table.string("col_1", 10);
    table.timestamps();
    table.enum("col_11", ["enum_1", "enum_2"]);
  });
};

export const down: Migration = () => {
  return new Schema(dialect).drop("basics");
};
