/* Init responsive nav
   ------------------------------ */
var customToggle = document.getElementById("nav-toggle");
var customToggleText = document.getElementById("nav-toggle-text");
var navigation = responsiveNav(".nav-wrapper", {
  customToggle: "#nav-toggle", // Selector: Specify the ID of a custom toggle
  customToggleText: "#nav-toggle-text", // Selector: Specify the ID of a custom toggle text
  enableFocus: true,
  enableDropdown: true,
  openDropdown: '<span class="screen-reader-text">Open submenu</span>',
  closeDropdown: '<span class="screen-reader-text">Close submenu</span>',
  open: function () {
    customToggleText.innerHTML = "Close menu";
  },
  close: function () {
    customToggleText.innerHTML = "Menu";
  },
  resizeMobile: function () {
    customToggle.setAttribute("aria-controls", "nav-wrapper");
  },
  resizeDesktop: function () {
    customToggle.removeAttribute("aria-controls");
  }
});