# Farm & Trading Financial PWA — GitHub Frontend

Deploy this folder as the GitHub Pages frontend.

Backend Cloudflare Tunnel hostname:
`https://vege.mdmsportal.uk`

Frontend API base is intentionally:
`https://vege.mdmsportal.uk`

The frontend already appends `/api/...` for backend calls, resulting in endpoints such as:
- https://vege.mdmsportal.uk/api/products
- https://vege.mdmsportal.uk/api/cash
- https://vege.mdmsportal.uk/api/sales
- https://vege.mdmsportal.uk/api/reports

Do not add `/api` to the Cloudflare tunnel hostname.

Backend CORS must allow your GitHub Pages origin.
