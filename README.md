# Travel Nomad React Website

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints in the terminal (normally http://localhost:5173).

## Blank-page fix included

This version fixes the invalid Lucide React palm-tree import that caused the app module to fail before React could render.

It also uses:

- pinned compatible package versions instead of `latest`
- an explicit `./App.jsx` import
- a standard Vite React plugin configuration
- a valid `#root` mount in `index.html`

## If you previously installed the broken version

Delete the old dependency cache before reinstalling:

### Windows PowerShell
```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
```

### macOS / Linux
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Production check

Before deploying, run:

```bash
npm run build
```
"# travelnomadadventures" 
