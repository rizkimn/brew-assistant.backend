import { timestamps } from '../columns.helper';
import {
  mysqlTable,
  int,
  varchar,
} from 'drizzle-orm/mysql-core';

export const grinders = mysqlTable('grinders', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  minClicks: int('min_clicks').notNull(),
  maxClicks: int('max_clicks').notNull(),
  clickStepNote: varchar('click_step_note', { length: 255 }),
  ...timestamps
});
