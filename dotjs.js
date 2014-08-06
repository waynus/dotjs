var hostname = location.hostname.replace(/^www\./, '');

var appendScript = function(path){
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		eval(this.responseText);
	}
	xhr.open('GET', chrome.extension.getURL(path));
	xhr.send();
}

var defaultStyle = document.createElement('link');
defaultStyle.rel = 'stylesheet';
defaultStyle.href = chrome.extension.getURL('styles/default.css');
document.head.appendChild(defaultStyle);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.extension.getURL('styles/' + hostname + '.css');
document.head.appendChild(style);

appendScript('scripts/default.js');
appendScript('scripts/' + hostname + '.js');
