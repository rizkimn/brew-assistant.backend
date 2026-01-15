import "dotenv/config";
import { db } from "./db/index";
import { beans as Beans } from "./db/schema/beans";
import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia")
  .get('/beans', async () => {

    const beans = await db.select().from(Beans);
    return beans;

  })
  .listen(process.env.APP_PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
