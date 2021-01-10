let change_color = document.getElementById('change-color');

chrome.storage.sync.get('color', function (data) {
	change_color.style.backgroundColor = data.color;
	change_color.setAttribute('value', data.color);
});

change_color.onclick = function (element) {
	let color = element.target.value;
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.scripting.executeScript({
			function: setTheColor,
		});
	});
};

function setTheColor() {
	document.body.style.backgroundColor = "' + color + '";
}
