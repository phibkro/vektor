import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
  },
});

const Session = defineTable({
  columns: {
		id: column.text({
			primaryKey: true
		}),
		expiresAt: column.date(),
		userId: column.text({
			references: () => User.columns.id
		})
	}
});

const Sponsor = defineTable({
  columns: {
    name: column.text(),
    url: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Session,
    Sponsor,
  }
});
