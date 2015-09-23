Since I've updated things to use Jekyll, I think a new style-guide is appropriate.

 - Always compile LESS to CSS, do not edit the CSS directly.
 - Start the file with the `layout`, `title`, and `asset` fields.
 - Name asset files according the the `asset` field, e.g. `asset: index` will ref `assets/styles/index.css` and `assets/scripts/index.js`.
 - New pages go in the root directory `/<page>.html`.
 - All links should be relative, unless they're referencing 3rd party resources.

[See `index.html` as a reference](https://github.com/ptp-chat/new/blob/gh-pages/index.html) to this guide.  If you navigate around a little you should be able to pick up on it fast.
