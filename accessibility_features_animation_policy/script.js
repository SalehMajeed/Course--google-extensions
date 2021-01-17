function set_value(value) {
	// set the animationPolicy According to the value
	chrome.accessibilityFeatures.animationPolicy.set({ value: value }, function () {});
}

function clear_animation_policy() {
	let clear_value;
	let values = document.querySelectorAll("[type='radio']");
	[...values].map(val => {
		if (val.checked) {
			clear_value = val;
			val.checked = false;
		}
	});
	chrome.accessibilityFeatures.animationPolicy.clear(clear_value, () => {
		console.log(clear_value);
	});
}

// Set event listener on the Items
document.querySelector('#ul-options').addEventListener('click', event => {
	if (event.target.defaultValue == 'clear') {
		clear_animation_policy();
	} else if (event.target.localName == 'input') {
		set_value(event.target.value);
	}
});

// fire every time when new value is set to animationPolicy
chrome.accessibilityFeatures.animationPolicy.onChange.addListener(data => console.log(data));

// get the animationPolicy
chrome.accessibilityFeatures.animationPolicy.get({}, policy => console.log(policy));
