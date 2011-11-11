$.ajax({
	url: chrome.extension.getURL('scripts/' + window.location.host.replace('www.', '') + '.js'),
	dataType: 'text',
	success: function(data){
		$(function(){
			eval(data);
		})
	}
});

$.ajax({
	url: chrome.extension.getURL('scripts/default.js'),
	dataType: 'text',
	done: function(data){
		$(function(){
			eval(data);
		}
	}
})
