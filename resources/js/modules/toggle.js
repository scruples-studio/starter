/** 
 * Toggle
 */   

// Show the element
var show = function (elem) {

	// Get the natural height of the element
	var getHeight = function () {
		elem.style.display = 'block'; 
		var height = elem.scrollHeight + 'px';
		elem.style.display = ''; 
		return height;
	};

	var height = getHeight();
	elem.classList.add('is-visible'); 
	elem.style.height = height;

	// Remove inline max-height so content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 350);
};

// Hide the element
var hide = function (elem) {
	elem.style.height = elem.scrollHeight + 'px';
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

    window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 350);

};

// Toggle element visibility
var toggle = function (elem, timing) {

    if (elem.classList.contains('is-visible')) {
		hide(elem);
		return;
	}
	show(elem);	
};

document.addEventListener('click', function (event) {
	if (!event.target.classList.contains('toggle')) return;
	event.preventDefault();
	var content = document.querySelector(event.target.hash);
	if (!content) return;
	toggle(content);
}, false);
