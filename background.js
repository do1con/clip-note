/* eslint-disable no-undef */
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.create({
		url: chrome.extension.getURL('build/index.html'),
		selected: true,
	});
});

chrome.storage.sync.set({ key: 'value' }, function () {
	// Chrome Storage Sync set, callback func
	console.log('Value is set to ' + 'value');
});

chrome.storage.sync.get(['key'], function (result) {
	// Chrome Storage Sync get, callback func
	console.log('Value currently is ' + result.key);
});
