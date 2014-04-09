var path, type;
if(navigator.appVersion.match(/Chromium/))
	type = 'Chromium';
else
	type = 'Google/Chrome';

var system = navigator.platform;
if(system.indexOf('Win') != -1)
	path = 'C:/Users/%USERNAME%/AppData/Local/' + type + '/User Data';
else if(system.indexOf('Linux') != -1)
	path = '~/.config/' + type.toLowerCase().replace(/\//, '-');
else if(system.indexOf('Mac') != -1)
	path = '~/Library/Application Support/' + type;

path += '/Default/Extensions/' + chrome.i18n.getMessage('@@extension_id');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'manifest.json');
xhr.onload = function(){
	var manifest = JSON.parse(xhr.responseText);
	path += '/' + manifest.version + '_0/scripts';

	if(system.indexOf('Win') != -1)
		path = path.replace(/\//g, '\\\\');

	var link = document.getElementById('link');
	link.value = path;
	link.focus();
	link.select();
}
xhr.send(null);
