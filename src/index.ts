import { Elysia, t } from "elysia";

const app = new Elysia();
const PORT = 3000;

app.get('/', ({query}) => query, {
  query: t.Object({
    name: t.String(),
    alias: t.Optional(t.String())
  })
}).listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
