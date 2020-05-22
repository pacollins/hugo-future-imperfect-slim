With this version, the theme has fully implemented **static search** using
`lunr.js`. That being said, a few modifications were necessary to implement this
feature.

To utilize this, or future version of *Hugo Future Imperfect Slim*, please make
the following changes:

1. Add the following to your `config.toml` before `[params]`:
  ```
  ...
  disableLanguages = [""]

  [outputs]
      home = ["html", "json"]

  [params]
  ...
  ```

2. Remove the underscore from all `about` and `contact` page file names:
`_index.md --> index.md`

3. Add `layout = "about"` or `layout = "contact"` to all of the files you just
just adjusted the file names for.

While I realize this is inconvenient, I hope that it is worth it to you in the
long run. Thanks for using the theme, and feel free to submit issues as needed.
