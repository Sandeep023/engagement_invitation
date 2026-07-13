# Versioned Engagement E-vite

## Folder structure

```text
engagement-evite-versioned/
├── index.html
├── assets/
│   ├── style.css
│   └── script.js
├── v1/
│   └── index.html
├── v2/
│   └── index.html
└── v3/
    └── index.html
```

## URLs after publishing

Assuming the repository is named `engagement-invitation`:

- Main selector:
  `https://YOUR-USERNAME.github.io/engagement-invitation/`
- Version 1:
  `https://YOUR-USERNAME.github.io/engagement-invitation/v1/`
- Version 2:
  `https://YOUR-USERNAME.github.io/engagement-invitation/v2/`
- Version 3:
  `https://YOUR-USERNAME.github.io/engagement-invitation/v3/`

## Redirect using the main URL

The root `index.html` accepts these formats:

- `?version=v1`
- `?version=v2`
- `?version=v3`
- `?v=1`
- `?v=2`
- `?v=3`
- `#v1`
- `#v2`
- `#v3`

Example:

`https://YOUR-USERNAME.github.io/engagement-invitation/?version=v1`

This redirects to:

`https://YOUR-USERNAME.github.io/engagement-invitation/v1/`

## Editing versions

Each design has its own `index.html`. Shared CSS and JavaScript are kept in `/assets`.

Version 1 contains the current completed invitation with the embedded Google RSVP form. Version 2 and Version 3 are starter pages ready for separate designs.
