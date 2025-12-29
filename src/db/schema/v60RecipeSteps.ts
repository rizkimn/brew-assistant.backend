import { agitations, waterfalls, timestamps } from '../columns.helper';
import { v60Recipes } from './v60Recipes';
import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  time,
} from 'drizzle-orm/mysql-core';

export const v60RecipeSteps = mysqlTable('v60_recipe_steps', {
  id: int('id').autoincrement().primaryKey(),
  recipeId: int('recipe_id').references(() => v60Recipes.id).notNull(),
  stepOrder: int('step_order').notNull(),
  pourAmount: int('pour_amount').notNull(),
  timeOffset: time('time_offset').notNull(),
  duration: time('duration').notNull(),
  agitation: mysqlEnum('agitation', agitations).notNull(),
  waterfall: mysqlEnum('waterfall', waterfalls).notNull(),
  description: text('description'),
  ...timestamps
});
