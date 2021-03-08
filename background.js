/* eslint-disable no-undef */
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.create({
		url: chrome.extension.getURL('build/index.html'),
		selected: true,
	});
});
