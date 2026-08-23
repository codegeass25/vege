# VEGE v3 GitHub Pages frontend

Deploy this folder's contents to the GitHub Pages repository for `/vege/`.

The UI is responsive for desktop/tablet/mobile, uses relative PWA paths, and calls the backend at `https://vege.mdmsportal.uk` by default.

Optional API override:
```html
<script>window.VEGE_API_BASE='https://your-api.example.com'</script>
```

The page exposes:
- KPI cards and executive dashboard
- Clickable datasets with detail drawers
- Print + CSV download buttons for lists
- Preview modes for financial reports
- Mobile/tablet bottom navigation
- Realtime synchronization through the backend event stream
