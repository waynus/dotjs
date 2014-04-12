# ~/.js

[dotjs-universal](https://github.com/p3lim/dotjs-universal) is a Chrome/Chromium browser extension that executes JavaScript and CSS files on websites based on their filename.

Unlike the original, this version does not run it's own local fileserver, all the files are located within the extension's own directory instead, so it'll work on any system!

If you navigate to `www.google.com`, dotjs will execute `/scripts/google.com.js` and/or `/styles/google.com.css` if either of the files exist.

This makes it super easy to spruce up your favorite pages using JavaScript or CSS.

Bonus: All files have jQuery 2.1 loaded, regardless of whether the site you're hacking uses jQuery.

Double bonus: `/scripts/default.js` is loaded on every site, meaning you can stick plugins or helper functions in it.

Triple bonus: By going to the extension options you will be presented by the absolute path to the scripts and styles directory.

## Example

    // swap google logo with trollface
    $('#hplogo').css({
        background: 'url(//bit.ly/ghD24e) no-repeat',
        backgroundSize: 'auto 95px'
    });

![](http://i.imgur.com/vZ3aIT5.png)

## Install

[<img src='https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png'>](http://bit.ly/dotjs-universal)

## Credits

- Icon: <http://raphaeljs.com/icons/>
- jQuery: <http://jquery.com/>
- Original: [Chris Wanstrath](https://github.com/defunkt)
- Ryan Tomayko for:

> "I almost wish you could just stick JavaScript in ~/.js. Do you know what I'm saying?"

## Other versions

- [dotjs-ubuntu](https://github.com/glenbot/dotjs-ubuntu)
- [dotjs](https://github.com/defunkt/dotjs)

## Other browsers

- [Firefox Add-on](https://github.com/rlr/dotjs-addon)
- [Safari Extension](https://github.com/wfarr/dotjs.safariextension)
- [Fluid UserScript](https://github.com/sj26/dotjs-fluid)
