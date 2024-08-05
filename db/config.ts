import { column, defineDb, defineTable } from 'astro:db';

const Sponsors = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    url: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Sponsors,
  }
});
