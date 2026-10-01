# Cleanup notes

These paths are admin-template leftovers. They are still linked from the PHP pages (CSS, icon fonts, DataTables, charts), so this maintenance pass leaves them in place.

## Icon fonts (`dashboard/icons/`)

Vendored sets include `cryptocoins`, `flag-icon-css`, `font-awesome`, `ionicons`, `linea-icons`, `material-design-iconic-font`, `pe-icon-set-weather`, `simple-line-icons`, `themify-icons`, and `weather-icons`. Most of the cryptocoin and flag assets are unused by the water-data screens. Removing a set is safe only after checking `dashboard/css` and the PHP pages for references.

## Plugins (`dashboard/plugins/`)

Third-party JS and CSS from the theme (Bootstrap, Chartist, CKEditor, DataTables, maps, editors, and similar). The water-data table uses the DataTables assets; other plugins are unused by the P.E.R.A. pages. A later pass can delete a plugin only when nothing under `dashboard/*.php` or `dashboard/js` references it.

## Removed in this pass

macOS `.DS_Store` files were untracked and added to `.gitignore`. No application code lived in those files.

## Not a target

Do not replace the PHP UI, add a new login system, or introduce Composer just to load configuration. Database settings belong in the environment or `.env` (see `.env.example`).
