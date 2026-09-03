# RAGAS v5.8 PWA Frontend

The frontend is split into:
- `index.html` — semantic application shell/workspaces
- `app.css` — responsive light/dark UI and component styling
- `app.js` — client-side workflow and API interaction logic

When hosted on GitHub Pages, the production API base defaults to **`https://vege.mdmsportal.uk`**. When served by the Node backend, it uses the same origin. `sw.js` caches the app shell while API responses remain network-controlled.

Production backend route: `vege.mdmsportal.uk -> http://127.0.0.1:4545` through Cloudflare tunnel `vege-api` (`13a250cb-c577-427b-ac81-8ecfc267c608`).
