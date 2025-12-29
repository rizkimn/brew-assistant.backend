import { timestamps } from '../columns.helper';
import { beans } from './beans';
import { grinders } from './grinders';
import { v60Recipes } from './v60Recipes';
import {
  int,
  mysqlTable,
  text,
  time,
  varchar,
} from 'drizzle-orm/mysql-core';

export const brewSessions = mysqlTable('brew_sessions', {
  id: int('id').autoincrement().primaryKey(),
  beanId: int('bean_id').references(() => beans.id).notNull(),
  recipeId: int('recipe_id').references(() => v60Recipes.id).notNull(),
  grinderId: int('grinder_id').references(() => grinders.id).notNull(),
  dripper: varchar('dripper', { length: 255 }).notNull(),
  grindClicks: int('grind_clicks').notNull(),
  doseGram: int('dose_gram').notNull(),
  ratio: varchar('ratio', { length: 50 }).notNull(),
  waterTemp: int('water_temp').notNull(),
  totalWater: int('total_water').notNull(),
  drawdownTime: time('drawdown_time').notNull(),
  description: text('description'),
  ...timestamps
});
