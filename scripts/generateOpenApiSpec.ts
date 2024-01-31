import appOpenApi from "../src";

const doc = appOpenApi.getOpenAPI31Document({
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});
await Bun.write("output.json", JSON.stringify(doc));
