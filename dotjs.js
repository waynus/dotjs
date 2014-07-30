var hostname = location.hostname.replace(/^www\./, '')

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('styles/' + hostname + '.css');
document.documentElement.insertBefore(link);

var script = document.createElement('script');
script.src = chrome.extension.getURL('scripts/' + hostname + '.js');
document.documentElement.insertBefore(script);

var defaultScript = document.createElement('script');
defaultScript.src = chrome.extension.getURL('scripts/default.js');
document.documentElement.insertBefore(defaultScript);
