# chrome.browserAction

`chrome.browserAction` is the initial stage To access the extension from extensions or sometime google tool bar. it provides features like set the icon, title, badge and set the default popup for our extension. default manifest for our browserAction would be --->

```js
"browser_action": {
		"default_icon": "icon.png",
		"default_title": "Hello Tooltip"
	},

	// ico and svg