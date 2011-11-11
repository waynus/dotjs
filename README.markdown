..................... dotjs ........................

dotjs is a Google Chrome extension that executes
JavaScript files in `/scripts` based on their filename.

If you navigate to `http://www.google.com/`, dotjs
will execute `/scripts/google.com.js`.

This makes it super easy to spruce up your favorite
pages using JavaScript.

Bonus: files in `/scripts` have jQuery 1.7 loaded,
regardless of whether the site you're hacking
uses jQuery.

Double bonus: `/scripts/default.js` is loaded on every
request, meaning you can stick plugins or helper
functions in it.

GreaseMonkey user scripts are great, but you need to
publish them somewhere and re-publish after making
modifications. With dotjs, just add or edit files in
`/scripts`.

## Example

    // swap github logo with trollface
    $('#header .logo img')
      .css('width', '100px')
      .css('margin-top', '-15px')
      .attr('src', '//bit.ly/ghD24e')

![](https://bit.ly/gAHTbC)

## How It Works

The dotjs extension makes [ajax](http://api.jquery.com/category/ajax) requests
to /scripts/convore.com.js any time you hit a page on
convore.com, for example, and executes the
returned JavaScript.

Unlike the original dotjs, this one does not run an own
local filesystem, so all files are located within the
extensions' own directory.

By going to the option page, you will be met with a link
to the extension directory which `/scripts` are in.

You can then make a shortcut to that directory if you'd like.

## Requires

- Google Chrome / Chromium

## Install it

Click on the `dotjs.crx` file and choose "View Raw".

You can then choose to install the extension to Chrome.

## Uninstall it

You unstall it like any normal extension

## Credits

- Icon: <http://raphaeljs.com/icons/>
- jQuery: <http://jquery.com/>
- Chris Wanstrath (defunkt): dotjs

## Linux

- [dotjs-ubuntu](https://github.com/glenbot/dotjs-ubuntu)

## OS X

- [dotjs](https://github.com/defunkt/dotjs)
