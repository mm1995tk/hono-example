import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

const route = createRoute({
  method: "get",
  path: "/{id}",
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({ name: z.string() }),
        },
      },
      description: "",
    },
  },
});

const appOpenApi = new OpenAPIHono();

appOpenApi.use("/*", async (c, n) => {
  console.log("hi");
  const r = await n();
  console.log("bye");
  return r;
});

// appOpenApi.doc31("/doc", {
//   openapi: "3.1.0",
//   info: {
//     version: "1.0.0",
//     title: "My API",
//   },
// });

appOpenApi.openapi(route, async c => {
  console.log(c.req.valid("param"));
  return c.json({ name: "xxx" });
});

export default appOpenApi;
