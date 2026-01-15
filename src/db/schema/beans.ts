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
  imageSrc: varchar('image_src', { length: 512 }),
  roaster: varchar('roaster', { length: 255 }),
  origin: varchar('origin', { length: 255 }),
  varietal: varchar('varietal', { length: 255 }),
  process: varchar('process', { length: 255 }).notNull(),
  roastLevel: mysqlEnum('roast_level', [
    'light',
    'medium',
    'dark',
  ]).notNull(),
  elevation: int('elevation'),
  flavorNotes: text('flavor_notes'),
  ...timestamps
})
