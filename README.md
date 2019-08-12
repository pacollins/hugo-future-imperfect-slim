# Hugo Future Imperfect Slim

**Hugo Future Imperfect** *Slim* is a theme based on
[jpescador's](https://github.com/jpescador/) port of
[HTML5 UP's theme](http://html5up.net/future-imperfect) by the same name.  The
goal of this theme is to continue the development of the
[original theme](https://github.com/jpescador/hugo-future-imperfect).

This version takes that port and modernizes it with **CSS Grid** and **Modern
Hugo functions**. In addition to the features that were present in the original
theme, there are some additional features for you to utlize however you see fit.

![Hugo Future Imperfect Screenshot](https://raw.githubusercontent.com/pacollins/hugo-future-imperfect-slim/master/images/screenshot.png)

Check out this
[live example site](https://themes.gohugo.io/theme/hugo-future-imperfect-slim/)
on the Hugo Theme Showcase.

## Table of Contents

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
	- [Non-Development](#non-development)
	- [Development](#development)
	- [exampleSite](#examplesite)
	- [config.toml](#configtoml)
	- [Hugo's Built-In Server](#hugos-built-in-server)
- [Shortcodes](#shortcodes)
- [About the Author](#about-the-author)
- [License](#license)

<!-- /TOC -->

## Getting Started

There are two different ways I recommend getting started and it depends on one
of two things: are you going to help develop the theme, or do you just want to
use it for personal use.

### Non-Development

If you would like to stay up-to-date with the current iteration of the theme and
don't plan to aid in the development of the theme (or don't want to aid via your
site), I would highly recommend you add it as a submodule to your project. From
your site directory, do the following:

```
mkdir themes // Creates a Themes Folder
cd themes		 // Points to the Themes Folder
git submodule add https://github.com/pacollins/hugo-future-imperfect-slim.git
```

You will then have access to the theme at _themes/hugo-future-imperfect-slim_
from within your project folder.

From here, you can customize any of the files for your personal use by creating
a dupicating the file at the project level instead of the theme level. For
example, if you wanted to change the About Me Page Template (which is located at
_MYPROJECT/themes/layouts/about/list.html_), I would create a new file at
_MYPROJECT/layouts/about/list.html_ and change it to what I wanted it to be.

This is the proper way to adjust files for personal use when they do not
contribute to the development of the them, and it can help prevent your site
from being incompatible with the original theme.

### Development

If you plan on assisting with developing the theme, you will want to have your
own copy that is not a submodule. To do this, navigate to where you want to
place it and do the following:

```
git clone https://github.com/pacollins/hugo-future-imperfect-slim.git
```

### exampleSite

Within the hugo-future-imperfect-slim folder, there will be another folder
called _exampleSite_. The structure of the folder will look like this:

```
exampleSite
├── config.toml
├── staticman.yml
├── content
|   ├── about
|   │   ├── _index.br.md
|   │   ├── _index.fr.md
|   │   ├── _index.md
|   │   └── _index.pl.md
|   ├── blog
|   │   ├── creating-a-new-theme.fr.md
|   │   ├── creating-a-new-theme.md
|   │   ├── creating-a-new-theme.pl.md
|   │   ├── goisforlovers.fr.md
|   │   ├── goisforlovers.md
|   │   ├── goisforlovers.pl.md
|   │   ├── hugoisforlovers.fr.md
|   │   ├── hugoisforlovers.md
|   │   ├── hugoisforlovers.pl.md
|   │   ├── migrate-from-jekyll.fr.md
|   │   ├── migrate-from-jekyll.md
|   │   └── migrate-from-jekyll.pl.md
|   ├── contact
|   |   |-- _index.br.md
|   │   ├── _index.fr.md
|   │   ├── _index.md
|   │   └── _index.pl.md
|   └── itemized
|       ├── item1.fr.md
|       ├── item1.md
|       ├── item1.pl.md
|       ├── item2.fr.md
|       ├── item2.md
|       ├── item2.pl.md
|       ├── item3.fr.md
|       ├── item3.md
|       ├── item3.pl.md
|       ├── item4.fr.md
|       ├── item4.md
|       └── item4.pl.md
├── data
│   └── comments
│       └── .gitkeep
└── static
    ├── css
    │   └── add-on.css
    ├── img
    |   ├── 2014
    |   |   ├── 04
    |   |   |   ├── pic01.jpg
    |   |   |   └── pic02.jpg
    |   |   └── 09
    |   |       └── pic03.jpg
    |   └── main
    |       └── logo.jpg
    └── js
        └── add-on.js
```

To get started, you will want to copy _config.toml_ from _exampleSite_ to the
root directory of your project.

If you would like static comments hosted by [Staticman](https://staticman.net/),
you will also need to copy _staticman.yml_.

### config.toml

This file is important to the initial set-up of your project and contains all of
the customizations that the developers feel as though you should have easy
access to. Each prarameter listed should include a comment to help describe it's
function.  Unless otherwise state, _true_ will turn a feature **on**, while
_false_ will turn a feature **off**. It is structured as follows:


```
.Site
├── .Params // Controls Carious Settings
|   ├── .Meta
|   ├── .Header
|   ├── .Intro
|   │   └── .Pic
|   ├── .Sidebar
|   ├── .Footer
|   └── .Staticman
|       └── .Recaptcha
├── .Languages // Controls Multilingual Settings and Navigation
|   ├── .En
|   │   └── .Menu.Main
|   ├── .Fr
|   │   └── .Menu.Main
|   ├── .Pl
|   │   └── .Menu.Main
|   ├── .Br
|   │   └── .Menu.Main
└── .Social  // Controls Links to Social Media
```

### Hugo's Built-In Server

To see a live version of your site locally, use the following command:

```
hugo server
```

Hugo will build your site and host a server locally. You can view this live at
[localhost:1313](http://localhost:1313).

## Shortcodes

In addition to the native [Hugo shortcodes](https://gohugo.io/extras/shortcodes/),
the theme also includes additional shortcodes that you may find useful.

## Source Code Highlighting

You can enable source code hightlighting via
[highlight.js](https://highlightjs.org).  If you want to use a language which is
not in the [common package](https://highlightjs.org/download/) of highlight.js
you can enable that language via `highlightjsLang` and the additional packages
with be added to your site.

```
highlightjsLang=["yaml", "groovy"]
```

## About the Author

[Hugo Future Imperfect](http://html5up.net/future-imperfect) is a theme by
[HTML5 UP](http://html5up.net). [Julio Pescador](https://jpescador.com) took the
code provided from them and ported it over so that it could be used with Hugo.
[Patrick Collins](https://pacollins.com) then took this port, broke it down and
restructured it under newer Hugo functions in addition to building it
mobile-first utlizing CSS Grid. This also allowed for the slimming of the CSS
and JS files originally included to strip those features not used in the site
(hence the name, _slim_). During the this time,
[StatnMap](https://github.com/statnmap) worked on overhauling the majority of
the theme to include Multilingual functionality - which is included here.

Since the original development had become stale and the redesign is _not_
directly compatible with previous versions of the original
[Hugo Future Imperfect](https://github.com/jpescador/hugo-future-imperfect),
it is now in its own repo to help aid in development and prevent confusion.

Please also refer to the
[project contributors list](https://github.com/pacollins/hugo-future-imperfect-slim/graphs/contributors)
for everyone that has directly contributed to this version of the theme.

## License

This theme is released under the
[Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/).
"[Future Imperfect](https://html5up.net/future-imperfect)" is a theme by
[HTML5 UP](http://html5up.net) licensed under the same terms.  Please read the
[license](https://github.com/pacollins/hugo-future-imperfect-slim/blob/master/LICENSE.md)
for more information.
