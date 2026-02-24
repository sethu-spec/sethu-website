# Personal Website Starter

This version is a single opening interface:
- Left side: your photo + about description
- Right side: clickable panels (`Works`, `Publications`, `Talks`, `Highlights`, `Contact`)
- Clicking a panel opens a popup with details
- Background slideshow loads images named `sn1`, `sn2`, ... from this folder

## 1) Edit Your Content

Open `script.js` and update `SITE_DATA`:
- `name`, `role`, `description`
- `profilePhotoUrl`
- `logos` (university/lab logos)
- `panelOrder`
- `panels.works`
- `panels.publications`
- `panels.talks`
- `panels.highlights`
- `panels.contact`

## 2) Add Your Background Images

Put your files in the project root with names like:
- `sn1.jpeg`
- `sn2.jpeg`
- `sn3.jpeg`

The script automatically checks:
- `sn1..sn20` with `jpeg`, `jpg`, `png`, `webp`

You can change this in `script.js`:
- `backgroundPrefix`
- `backgroundMax`
- `backgroundExtensions`
- `backgroundIntervalMs`

## 3) Add Your Photo

Put your photo at:
- `assets/profile.jpg`

If missing, the page falls back to:
- `assets/profile-placeholder.svg`

## 4) Add Logos

Put your logo files in `assets/` and update:
- `SITE_DATA.logos` in `script.js`

## 5) Run Locally

```bash
python3 -m http.server 8000
```

Open:
- `http://localhost:8000`
