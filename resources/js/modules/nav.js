// sv-hover-intent.js
// https://github.com/svivian/sv-hover-intent-js

// Add hover intent to delay closing the submenu for mouse users
var hiMenuItems = document.querySelectorAll('.mainNav-menuItem--hasSubmenu');
var hi = new SV.HoverIntent(hiMenuItems, {
	onEnter: function(targetItem) {
		targetItem.classList.add('open');
	},
	onExit: function(targetItem) {
		targetItem.classList.remove('open');
	},

	// Default options
	exitDelay: 500,
	interval: 100,
	sensitivity: 7,
});

// ---------------------------------------- //

// Set up the parent link as the submenu toggle
// Alternative: dynamically add button as submenu toggle
// See https://www.w3.org/WAI/tutorials/menus/flyout
var submenuItems = document.querySelectorAll(
  "li.mainNav-menuItem--hasSubmenu"
);
Array.prototype.forEach.call(submenuItems, function (el) {
  el.querySelector("a").addEventListener("click", function (event) {
    // To make the parent link clickable, change "click" to "focus"
    if (this.parentNode.className == "mainNav-menuItem--hasSubmenu") {
      this.parentNode.className = "mainNav-menuItem--hasSubmenu open";
      this.setAttribute("aria-expanded", "true");
    } else {
      this.parentNode.className = "mainNav-menuItem--hasSubmenu";
      this.setAttribute("aria-expanded", "false");
    }
    event.preventDefault();
    return false;
  });
});

// ---------------------------------------- //

// Toggle button functionality
var toggle = document.querySelector("#navToggle");
var menu = document.querySelector("#menu");
toggle.addEventListener("click", function () {
  if (menu.classList.contains("jsIsActive")) {
    menu.classList.remove("jsIsActive");
    toggle.classList.remove("jsIsActive");
  } else {
    menu.classList.add("jsIsActive");
    toggle.classList.add("jsIsActive");
  }
});