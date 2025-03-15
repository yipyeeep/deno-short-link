import { Router } from "./router.ts";
import { generateShortCode, storeShortLink, getShortLink } from "./db.ts";
const app = new Router();

app.get('/', () => new Response('Hi Mom!'))

app.post('/health-check', () => new Response("It's ALIVE!"))

export default {
  fetch(req) {
    return app.handler(req);
  },
} satisfies Deno.ServeDefaultExport;

app.post("/links", async (req) => {

  const { longUrl } = await req.json()

  const shortCode = await generateShortCode(longUrl);
  await storeShortLink(longUrl, shortCode, 'testUser');

  return new Response("success!", {
    status: 201,
  });
});


app.get("/links/:id", async (_req, params, _info) => {

  const shortCode = params?.pathname.groups.id;

  const data = await getShortLink(shortCode!)

  return new Response(JSON.stringify(data), {
    status: 201,
    headers: {
      "content-type": "application/json",
    },

  });

})