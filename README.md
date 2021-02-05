# Hugo Future Imperfect Slim

**Hugo Future Imperfect** *Slim* is a theme based on [jpescador's](https://github.com/jpescador/)
port of [HTML5 UP's theme](http://html5up.net/future-imperfect) by the same name.
The goal of this theme is to continue the development of the [original theme](https://github.com/jpescador/hugo-future-imperfect).
This version takes that port and modernizes it with **CSS Grid** and **Modern
Hugo functions**.

Check out the [live demo](https://themes.gohugo.io/theme/hugo-future-imperfect-slim/)
on the Hugo Theme Showcase.

![Hugo Future Imperfect Screenshot](https://raw.githubusercontent.com/pacollins/hugo-future-imperfect-slim/master/images/screenshot.png)

## Table of Contents

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
	- [Non-Development](#non-development)
	- [Development](#development)
	- [exampleSite](#examplesite)
	- [config.toml](#configtoml)
	- [Staticman](#staticman)
	- [Hugo's Built-In Server](#hugos-built-in-server)
- [Shortcodes](#shortcodes)
- [About the Author](#about-the-author)
- [License](#license)

<!-- /TOC -->

## Getting Started

Depending on how you plan to utilize the theme, there are two different ways we
recommend getting started.

### Non-Development

If your goal is to simply use the theme on your site *even if you plan to
customize the theme*, and not make pull requests to this repository, you should
add the theme as a submodule to your project.

After you have extracted the files from the `exampleSite` directory, do the
following from within the root directory of your site:

```shell
mkdir themes     // Creates a "themes" Folder
cd themes        // Points to the "themes" Folder
git submodule add https://github.com/pacollins/hugo-future-imperfect-slim.git
```

All of the theme files will be accessible from `themes/hugo-future-imperfect-slim`
from within your project folder.

If you wish to customize **any** of the files in the theme for your personal use,
simply create a duplicate file at the project-level instead of the theme level.
This is function that is innate to Hugo based on [Hugo's lookup order](https://gohugo.io/templates/lookup-order/)

For example, if you wanted to change the About Me Page Template (`<my-project>/themes/layouts/_default/about.html`). You would create a new file at `<my-project>/layouts/_default/about.html` based on the theme file, but including your modifications

This is the proper way to adjust files for personal use in a way that does not
make your site incompatible with the theme.

When you are ready to update your site to the current version of the theme, do
the following:

```shell
git submodule update --remote --merge
```

### Development

If you plan on assisting with developing the theme, you will want to have your
own copy that is not a submodule. To do this, navigate to where you want to
place it and do the following:

```shell
git clone https://github.com/pacollins/hugo-future-imperfect-slim.git
```

### exampleSite

Within the `hugo-future-imperfect-slim` folder, there will be another folder
called `exampleSite`. This folder defines the theme's typical site structure,
which looks like this:

```
exampleSite
├── content
│   ├── about
│   │   ├── index.fr.md
│   │   ├── index.md
│   │   ├── index.pl.md
│   │   └── index.pt.md
│   ├── blog
|   |   ├── _index.md
│   │   ├── emoji-support.fr.md
│   │   ├── emoji-support.md
│   │   ├── markdown-syntax.fr.md
│   │   ├── markdown-syntax.md
│   │   ├── placeholder-text.md
│   │   ├── rich-content.fr.md
│   │   └── rich-content.md
│   └── contact
│       ├── index.fr.md
│       └── index.md
├── data
│   └── comments
│       └── 6354f801456983b22c4b91ce42adfca7
|           ├── 7f97ca70-c476-11e9-999e-498e0902dd73.json
│           └── a69c31b0-c476-11e9-999e-498e0902dd73.json
├── resources
│   └── assets
|       ├── scss
│       |   └── scss
│       │       ├── main.scss_b5a97001882d870cddf46d3bce56b70e.content
│       │       ├── main.scss_b5a97001882d870cddf46d3bce56b70e.json
│       │       ├── main.scss_f300667da4f5b5f84e1a9e0702b2fdde.content
│       │       └── main.scss_f300667da4f5b5f84e1a9e0702b2fdde.json
│       └── images
├── static
│   ├── css
│   │   └── add-on.css
│   ├── img
│   │   ├── 2014
│   │   │   ├── 04
│   │   │   │   ├── pic01.jpg
│   │   │   │   └── pic02.jpg
│   │   │   └── 09
│   │   │       └── pic03.jpg
│   │   ├── 2017
│   │   │   └── 08
│   │   │       └── pic04.jpg
│   │   └── main
│   │       └── logo.jpg
│   └── js
│       └── add-on.js
└── config.toml
└── staticman.yml
```

### config.toml

To get started, you will want to copy `exampleSite/config.toml` to the root
directory of your project.

For details on the `config.toml`, please refer to the
[wiki page](https://github.com/pacollins/hugo-future-imperfect-slim/wiki/config.toml)

### Staticman

If you would like static comments powered by [Staticman](https://staticman.net/),
you will also need to copy `exampleSite/staticman.yml` to the root directory of
your project.

For details on the Staticman, please refer to the
[wiki page](https://github.com/pacollins/hugo-future-imperfect-slim/wiki/staticman.yml)

### Custom JavaScript and CSS

You can adapt this theme according to your preferences using your own JS or CSS
code. To do this, you can either edit the `exampleSite/static/css/add-on.css` or
`exampleSite/static/js/add-on.js` files, or you can load your own files by adding
them to the `cssFiles` and `jsFiles` parameters in `config.toml`.

### Hugo's Built-In Server

To see a live version of your site locally, use the following command:

```shell
hugo server
```

Hugo will build your site and host a server locally. You can view this live at
[localhost:1313](http://localhost:1313).

## Shortcodes

For details on the shortcodes beyond the native [Hugo shortcodes](https://gohugo.io/extras/shortcodes/),
please refer to the [wiki page](https://github.com/pacollins/hugo-future-imperfect-slim/wiki/shortcodes).

## About the Author

[Hugo Future Imperfect](http://html5up.net/future-imperfect) is a theme by [HTML5 UP](http://html5up.net).
[Julio Pescador](https://jpescador.com) took the code provided from them and
ported it over so that it could be used with Hugo. [Patrick Collins](https://pacollins.com)
then took this port, broke it down and restructured it under newer Hugo functions
in addition to building it mobile-first utilizing CSS Grid. This also allowed for
the slimming of the CSS and JS files originally included to strip those features
not used in the site (hence the name, _slim_). During the this time, [StatnMap](https://github.com/statnmap)
worked on overhauling the majority of the theme to include Multilingual
functionality - which is included here.

Since the original development had become stale and the redesign is _not_
directly compatible with previous versions of the original [Hugo Future Imperfect](https://github.com/jpescador/hugo-future-imperfect),
it is now in its own repo to help aid in development and prevent confusion.

Please also refer to the [project contributors list](https://github.com/pacollins/hugo-future-imperfect-slim/graphs/contributors)
for everyone that has directly contributed to this version of the theme.

## License

This theme is released under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/). "[Future Imperfect](https://html5up.net/future-imperfect)"
is a theme by [HTML5 UP](http://html5up.net) licensed under the same terms.
Please read the [license](https://github.com/pacollins/hugo-future-imperfect-slim/blob/master/LICENSE.md)
for more information.
