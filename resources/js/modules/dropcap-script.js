/**
 * Drop-cap script
 */

// uses drop-cap as a polyfill: 
// https://github.com/adobe-webplatform/dropcap.js

// Set up conditional
const el = document.querySelector('article');
const classTest = el.classList.contains('writingContent');

if (classTest != false) {
// Run script

    // Document ready
    document.addEventListener('readystatechange', function(event) {
        if (document.readyState === "complete") {
        
            // Get the first paragraph
            var firstParagraph = document.querySelector('.writingContent p').textContent;
            
            // Get the second paragraph
            // (Useful if we want to add a class conditionally below)
            // var secondParagraph = document.querySelector('.writingContent').getElementsByTagName('p')[1];

            // Get the length of the first paragraph 
            var firstParagraphSize = firstParagraph.length;

            // Select the first letter from the first paragraph
            // The dropcap effect requires a letter; this will (correctly) 
            // fail if the user inserts punctuation or an HTML tag.
            var initialLetter = firstParagraph.charAt(0);
        
            // First paragraph without first letter 
            var slicedParagraph = firstParagraph.slice(1);
        
            // Check the size of the first paragraph.
            if (firstParagraphSize < 65) { 
                // No drop-c13p

                // Add a class to the second paragraph
                // secondParagraph.classList.add('TEST');

            } else if (firstParagraphSize > 135) {
                // The first paragraph is long enough to support the 3 row drop-cap effect.

                // Replace first paragraph with new content
                document.querySelector('.writingContent p').innerHTML = '<span id="dropcap">' + initialLetter + '</span>' + slicedParagraph;

                // 3 row drop-cap
                var dropcap = document.getElementById("dropcap");
                window.Dropcap.layout(dropcap, 3);

            } else {
                // The first paragraph is long enough to support the 2 row drop-cap effect.

                // Replace first paragraph with new content
                document.querySelector('.writingContent p').innerHTML = '<span id="dropcap">' + initialLetter + '</span>' + slicedParagraph;

                // 2 row drop-cap
                var dropcap = document.getElementById("dropcap");
                window.Dropcap.layout(dropcap, 2);

            }
        }
    });
}