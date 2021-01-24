chrome.browserAction.onClicked.addListener(tab => {
	console.log(tab); // Console the details of the current Tab
	chrome.browserAction.disable(tab.id, () => {
		console.log('disable');
		chrome.browserAction.setBadgeText({ tabId: tab.id, text: 'end' });
	});

	chrome.browserAction.enable(tab.id, () => {
		console.log('enable');
		chrome.browserAction.setBadgeText({ tabId: tab.id, text: 'start' });
	});
	// cb function doesn't contain any parameter.
	// onClicked event doesn't fire on default_popup.
});
