# ~/.js
dotjs is a Google Chrome extension that executes
JavaScript files on websites based on their filename.
The JavaScript files are loaded from the extension's
directory within the browser.

Example: If you navigate to `www.google.com`, dotjs
will execute `/scripts/google.com.js`.

This makes it super easy to spruce up your favorite
pages using JavaScript.

Bonus: All files have jQuery 1.9 loaded, regardless
of whether the site you're hacking uses jQuery.

Double bonus: `/scripts/default.js` is loaded on
every site, meaning you can stick plugins or
helper functions in it.

GreaseMonkey user scripts are great, but you need to
publish them somewhere and re-publish after making
modifications. With dotjs, just add or edit files in
`/scripts`.

## Example

    // swap google logo with trollface
    $('img.hplogo').
        .attr('src', '//bit.ly/ghD24e')
        .css({'width': 'auto'})
    );

![](http://i.imgur.com/vZ3aIT5.png)

## How It Works

The extension makes [ajax](http://api.jquery.com/category/ajax) requests to
`/scripts/google.com.js` any time you hit a page
on google.com, for example, and executes the
returned JavaScript.

Unlike the original dotjs, this version does not run
it's own local fileserver, so all the files are located
within the extension's own directory.

By going to the options you will be met with a link
to the `/scripts` directory.

## Install

[<img src='https://developers.google.com/chrome/web-store/images/branding/ChromeWebStore_BadgeWBorder_v2_206x58.png'>](http://bit.ly/dotjs-win)

## Credits

- Icon: <http://raphaeljs.com/icons/>
- jQuery: <http://jquery.com/>
- Original: [Chris Wanstrath (defunkt)](https://github.com/defunkt)
- Ryan Tomayko for:

> "I almost wish you could just
   stick JavaScript in ~/.js. Do
   you know what I'm saying?"

## Other versions

- [dotjs-ubuntu](https://github.com/glenbot/dotjs-ubuntu)
- [dotjs](https://github.com/defunkt/dotjs)

## Other browsers

- [Firefox Add-on](https://github.com/rlr/dotjs-addon)
- [Safari Extension](https://github.com/wfarr/dotjs.safariextension)
- [Fluid UserScript](https://github.com/sj26/dotjs-fluid)
