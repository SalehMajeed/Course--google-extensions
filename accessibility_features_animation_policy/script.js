function set_value(value) {
	// set the value to the animationPolicy
	chrome.accessibilityFeatures.animationPolicy.set({ value: value }, function () { });
	
// Set event listener on the Items
document.querySelector('#ul-options').addEventListener('click', event => {
	if (event.target.localName == 'input') {
		set_value(event.target.value);
	}
});


}

chrome.accessibilityFeatures.animationPolicy.onChange.addListener((data) => console.log(data.value))