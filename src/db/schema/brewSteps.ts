import { agitations, waterfalls, timestamps } from '../columns.helper';
import { brewSessions } from './brewSessions';
import {
  int,
  mysqlTable,
  mysqlEnum,
  time,
} from 'drizzle-orm/mysql-core';

export const brewSteps = mysqlTable('brew_steps', {
  id: int('id').autoincrement().primaryKey(),
  brewSessionId: int('brew_session_id').references(() => brewSessions.id).notNull(),
  stepOrder: int('step_order').notNull(),
  waterAmount: int('water_amount').notNull(),
  startTime: time('start_time').notNull(),
  endTime: time('end_time').notNull(),
  agitation: mysqlEnum('agitation', agitations).notNull(),
  waterfall: mysqlEnum('waterfall', waterfalls).notNull(),
  ...timestamps
});
