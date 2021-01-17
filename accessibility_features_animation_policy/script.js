function set_value(value) {
	// set the animationPolicy According to the value
	chrome.accessibilityFeatures.animationPolicy.set({ value: value }, function () {});
}

// Set event listener on the Items
document.querySelector('#ul-options').addEventListener('click', event => {
	if (event.target.localName == 'input') {
		set_value(event.target.value);
	}
});

// fire every time when new value is set to animationPolicy
chrome.accessibilityFeatures.animationPolicy.onChange.addListener(data => console.log(data));

// get the animationPolicy
chrome.accessibilityFeatures.animationPolicy.get({}, policy => console.log(policy));
