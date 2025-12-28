import { timestamps } from '../columns.helper.js';
import { brewSessions } from './brewSessions';
import {
  int,
  mysqlTable,
  mysqlEnum,
  text,
} from 'drizzle-orm/mysql-core';

export const brewSteps = mysqlTable('brew_steps', {
  id: int('id').autoincrement().primaryKey(),
  brewSessionId: int('brew_session_id').references(() => brewSessions.id).notNull(),
  acidity: mysqlEnum('acidity', ['1','2','3','4','5']).notNull(),
  sweetness: mysqlEnum('sweetness', ['1','2','3','4','5']).notNull(),
  bitterness: mysqlEnum('bitterness', ['1','2','3','4','5']).notNull(),
  body: mysqlEnum('body', ['1','2','3','4','5']).notNull(),
  flavorNotes: text('flavor_notes'),
  ...timestamps
});
