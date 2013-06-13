$.ajax({
	url: chrome.extension.getURL('scripts/' + location.hostname.replace(/^www\./, '') + '.js'),
	dataType: 'text',
	success: function(data){
		eval(data);
	},
});

$.ajax({
	url: chrome.extension.getURL('scripts/default.js'),
	dataType: 'text',
	success: function(data){
		eval(data);
	},
});
