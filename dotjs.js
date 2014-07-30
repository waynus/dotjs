var hostname = location.hostname.replace(/^www\./, '');

var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('styles/' + hostname + '.css');
document.documentElement.insertBefore(style);

var defaultStyle = document.createElement('link');
defaultStyle.rel = 'stylesheet';
defaultStyle.href = chrome.extension.getURL('styles/default.css');
document.documentElement.insertBefore(defaultStyle);

var script = document.createElement('script');
script.src = chrome.extension.getURL('scripts/' + hostname + '.js');
document.documentElement.insertBefore(script);

var defaultScript = document.createElement('script');
defaultScript.src = chrome.extension.getURL('scripts/default.js');
document.documentElement.insertBefore(defaultScript);
