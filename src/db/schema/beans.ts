import { timestamps } from '../columns.helper';
import {
  int,
  mysqlEnum,
  varchar,
  mysqlTable,
  text,
} from 'drizzle-orm/mysql-core';

export const beans = mysqlTable('beans', {
  id: int('id').autoincrement().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  origin: varchar('origin', { length: 255 }),
  varietal: varchar('varietal', { length: 255 }),
  process: mysqlEnum('process', [
    'washed',
    'natural',
    'honey',
  ]).notNull(),
  roastLevel: mysqlEnum('roast_level', [
    'light',
    'medium',
    'dark',
  ]).notNull(),
  elevation: int('elevation'),
  flavorNotes: text('flavor_notes'),
  ...timestamps
})
