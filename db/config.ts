import { column, defineDb, defineTable } from 'astro:db';

const Sponsors = defineTable({
  columns: {
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
