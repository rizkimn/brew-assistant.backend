import { timestamp } from 'drizzle-orm/mysql-core';

export const timestamps = {
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .onUpdateNow()
    .notNull(),
  deleted_at: timestamp(),
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
