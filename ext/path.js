// Really want to replace this with something more multi-OS-friendly
var xhr = new XMLHttpRequest();
xhr.open('GET', 'manifest.json');
xhr.onload = function(){
	var manifest = JSON.parse(xhr.responseText);
	document.getElementById('link').value = 'C:\\Users\\%USERNAME%\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\' + chrome.i18n.getMessage('@@extension_id') + '\\' + manifest.version + '_0\\scripts';
}
xhr.send(null);
