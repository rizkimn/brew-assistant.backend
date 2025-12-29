import { sql } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/mysql-core';

export const timestamps = {
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .onUpdateNow()
    .notNull(),
  deleted_at: timestamp('deleted_at'),
}

export const agitations = [
  'none',
  'stir',
  'swirl',
  'pulse',
  'zigzag',
] as const;

export const waterfalls = [
  'immersion',
  'percolation',
  'hybrid'
] as const;
