/* eslint-disable no-undef */
chrome.runtime.onInstalled.addListener(function () {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { hostEquals: 'developer.chrome.com' },
					}),
				],
				actions: [new chrome.declarativeContent.ShowPageAction()],
			},
		]);
	});

	chrome.browserAction.onClicked.addListener(function (tab) {
		chrome.tabs.create({
			url: chrome.runtime.getURL('build/index.html'),
		});
	});
});
