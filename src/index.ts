import { serve } from "bun";

serve({
  port: 3456,

  routes: {
    "/api/1/status": new Response("OK"),

    "/api/1/score": {
      GET: () => new Response("101/100")
    },

    "/api/*": Response.json({ message: "Not found"}, { status: 404 })
  }
})