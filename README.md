# Hugo Future Imperfect Slim

**Hugo Future Imperfect** *Slim* is a fork of [jpescador's](https://github.com/jpescador/) port of [HTML5 UP's theme](http://html5up.net/future-imperfect) by
the same name.  The goal of the fork was to continue the development of the
[original Hugo theme](https://github.com/jpescador/hugo-future-imperfect).

This version introduces **modern Hugo functions** as well as being built
mobile-first utilizing **CSS Grid**. To see the theme in action, check out the
[live demo site](https://themes.gohugo.io/theme/hugo-future-imperfect-slim/) on
the Hugo Themes Showcase.

![Hugo Future Imperfect Screenshot](https://raw.githubusercontent.com/pacollins/hugo-future-imperfect-slim/master/images/screenshot.png)

## Table of Contents

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
	- [Non-Development](#non-development)
	- [Development](#development)
	- [exampleSite](#examplesite)
	- [Staticman](#staticman)
	- [config.toml](#configtoml)
	- [Hugo's Built-In Server](#hugos-built-in-server)
- [Shortcodes](#shortcodes)
- [About the Author](#about-the-author)
- [License](#license)

<!-- /TOC -->

## Getting Started

### Non-Development

If you do not plan to aid in the development of the theme and just want to keep
your site up-to-date with the latest version of the theme, it would be
recommended to add it as a submodule to your site. To do that, do the following:

```
cd PATH/TO/YOUR/SITE  // Navigates to your site directory
mkdir themes          // Creates a Themes Folder
cd themes             // Points to the Themes Folder
git submodule add https://github.com/pacollins/hugo-future-imperfect-slim.git
```

The theme will then be placed at `/themes/hugo-future-imperfect-slim_` within
your project directory.

When you are ready to update the theme, run `git submodule update --remote` from
your site directory.

From here, you can customize any of the files for your personal use by creating
a duplicate file at the *project* level, rather than the theme level. For
example, if you wanted to change the "About Me" page template (which is located
at `MYPROJECT/themes/hugo-future-imperfect-slim/layouts/about/list.html`), you
would create a file at `MYPROJECT/layouts/about/list.html` and design it to how
you want it to be.

This is the proper way to customize files for personal use if the changes won't
be used to create a pull request and contribute to the development of the theme.
It will also help prevent your theme from being incompatible with the official
version.

### Development

If you do plan to aid in the development of the theme, you will want to create
your own fork of the theme. To do that, click the "Fork" button at the top right
and then follow [GitHub's instructions](https://help.github.com/en/articles/fork-a-repo).

### exampleSite

Each theme comes with an "exampleSite" folder containing all the files to
initialize the theme. You will want to move these files to your project
directory root. The most important file is the `config.toml`, which contains all
of the configuration settings for the theme. Check out the [`config.toml` wiki](#)
for more information about the individual settings.

### Staticman

If you would like static comments powered by [Staticman](https://staticman.net/),
you will also need to copy `staticman.yml`. Check out the [Staticman wiki](https://github.com/pacollins/hugo-future-imperfect-slim/wiki/Staticman-config)
for more details.

### Hugo's Built-In Server

Hugo comes with a built-in web server that allows you to see a live version of
your site that updates as you change files. To do this, do the following:

```
cd PATH/TO/YOUR/SITE  // Navigates to your site directory
hugo server
```

Hugo will then build your site and host a server locally. This site will be
visible to you at [localhost:1313](http://localhost:1313).

## About the Author

[Hugo Future Imperfect](http://html5up.net/future-imperfect) is a theme designed
by [HTML5 UP](http://html5up.net). [Julio Pescador](https://jpescador.com) took
the original code provided and then ported it to be utilized as a Hugo theme.
[Patrick Collins](https://pacollins.com) then took this port, and redesigned it
using newer Hugo functions, while also focusing on building it to be
mobile-first using CSS grid. This process also allowed for the slimming down of
the original CSS and JS files to remove features not utilized in the theme. This
is where the *slim* comes from in the name. While this was under development,
[Sebastien Rochette](https://statnmap.com/) developed the theme to include it's
multilingual functionality. Since this the introduction of the *slim* version,
[Vincent Tam](https://vincenttam.gitlab.io/) has integrated Staticman to the
theme.

Since the original development had become stale and this redesign is *not*
directly compatible with previous versions of the original
[Hugo Future Imperfect](https://github.com/jpescador/hugo-future-imperfect),
this version of the theme is in its own repository to help its development and'
to prevent confusion.

For additional contributors that have helped developed this fantastic theme,
please visit the [project contributors list](https://github.com/pacollins/hugo-future-imperfect-slim/graphs/contributors).

## License

This theme is released under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/).

"[Future Imperfect](https://html5up.net/future-imperfect)" is a theme by
[HTML5 UP](http://html5up.net) licensed under the same terms.  Please read the
[license](https://github.com/pacollins/hugo-future-imperfect-slim/blob/master/LICENSE.md) for more information.
