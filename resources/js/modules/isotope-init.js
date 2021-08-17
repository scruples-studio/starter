var elem = document.querySelector('.isotopeGrid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.isotopeGridItem',
  layoutMode: 'fitRows'
});

// element argument can be a selector string
//   for an individual element
var iso = new Isotope( '.isotopeGrid', {
  // options
});