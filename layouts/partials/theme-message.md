Below are the following changes that *could* be breaking changes for your site. For more details on any change, please refer to [PR #154](https://github.com/pacollins/hugo-future-imperfect-slim/pull/154).

The major breaking change is:

1. Users that have front matter that utilize `images` (backwards compatibility for `featured` and associated parameters still remains) *will* need to adjust from `[images]="SRC"` to the new format.
```
[[images]]
    src = "" // Link to image
    alt = "" // Alt text for image
    stretch = // Optional: See screenshots for referenced values and outcomes
```

If you utilize any of the following, there *might* be a breaking:

1. User custom templates *may* require adjustment.
2. User custom i18n languages, or custom templates referencing i18n translations *may* require adjustment.
3. User custom template for comments *will* require adjustment *if* it uses the theme's CSS and/or JS.
4. User custom CSS *may* need to adjust due to a variety of class name changes and specificity changes.

While I realize this is inconvenient, I hope that it is worth it to you in the long run. Thanks for using the theme, and feel free to submit issues as needed.
