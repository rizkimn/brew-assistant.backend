import { timestamps } from '../columns.helper.js';
import {
  mysqlTable,
  int,
  varchar,
  text,
} from 'drizzle-orm/mysql-core';

export const v60Recipes = mysqlTable('v60_recipes', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  baseRatio: varchar('base_ratio', { length: 50 }).notNull(),
  baseTemp: int('base_temp').notNull(),
  baseBrewTime: int('base_brew_time').notNull(),
  description: text('description'),
  ...timestamps
});
