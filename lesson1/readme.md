# Inside manifest.json

```
    {
	"permissions": ["tabs", "http://*/*", "https://*/*", "activeTab", "declarativeContent", "storage"],
	"background": {
		"scripts": ["js/background.js"],
		"persistent": false
	},
	"page_action": {
		"default_popup": "html/pop.html",
		"default_icons": {
			"16": "icon.png",
			"32": "icon.png",
			"48": "icon.png",
			"128": "icon.png"
		}
	},
	"options_page": "html/options.html",
	"icons": {
		"16": "icon.png",
		"32": "icon.png",
		"48": "icon.png",
		"128": "icon.png"
	},
	"manifest_version": 2
}
```

-   # permissions --->

> To use most chrome. APIs, your extension or app must declare its intent in the "permissions" field of the manifest. Each permission can be either one of a list of known strings (such as "geolocation") or a match pattern that gives access to one or more hosts. Permissions help to limit damage if your extension or app is compromised by malware. Some permissions are also displayed to users before installation, as detailed in Permission Warnings.

| permissions        | descriptions                                                                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| tabs               | Use the chrome.tabs API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser.      |
| activeTab          | Requests that the extension be granted permissions according to the activeTab specification.                                                       |
| declarativeContent | Use the chrome.declarativeContent API to take actions depending on the content of a page, without requiring permission to read the page's content. |
| storage            | Use the chrome.storage API to store, retrieve, and track changes to user data.                                                                     |

---

-   # background --->

> A background page is loaded when it is needed, and unloaded when it goes idle.Once it has been loaded, a background page will stay running as long as it is performing an action, such as calling a Chrome API or issuing a network request. Additionally, the background page will not unload until all visible views and all message ports are closed.

| Task       | Description                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| scripts    | Registering a background script in the manifest tells the extension which file to reference, and how that file should behave. |
| persistent | Persistent is used to run backround scripts on a perticular Listener not the whole time.                                      |

-   # page_action --->
    > Use the chrome.pageAction API to put icons in the main Google Chrome toolbar, to the right of the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages. Page actions appear grayed out when inactive.

| Actions       | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| default_popup | declaring the default page display on perticular page action. |
| default_icons | set an image for that page action.                            |

-   # options_page --->
    > Allow users to customise the behavior of an extension by providing an options page. A user can view an extension's options by right-clicking the extension icon in the toolbar then selecting options or by navigating to the extension management page at chrome://extensions, locating the desired extension, clicking Details, then selection the options link

# chrome.runtime.onInstalled.addListener ->

> Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.
> it should be function like this

```
chrome.runtime.onInstalled.addListener(function () {
	// write your code here.
});
```

# chrome.storage.sync.set ->

> chrome.storage.sync.set is used set values in storage. it takes two arguments.first is object for key value pair and the second is the callback function.

```
chrome.storage.sync.set({ }, function () {});
```

# chrome.declarativeContent.onPageChanged.removeRules ->

> To remove rules call the removeRules() function. It accepts an optional array of rule identifiers as its first parameter and a callback function as its second parameter.If rule_ids is undefined, all registered rules of this extension are removed. The callback() function is called when the rules were removed.

```
chrome.declarativeContent.onPageChanged.removeRules(rule_ids, function callback() {...});
```
