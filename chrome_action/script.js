chrome.alarms.create('a1', { when: 100 });
chrome.alarms.get('a1', function (al) {
	console.log(al);
});
