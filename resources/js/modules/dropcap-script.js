/**
 * Drop-cap script
 */

// uses drop-cap as a polyfill: 
// https://github.com/adobe-webplatform/dropcap.js


// Is this the Writing article template?
if (document.body.classList.contains('Template')) {

    // Set up article conditional
    var article = document.querySelector('article');
    var articleTest = article.classList.contains('writingContent');

    if (articleTest !== null) {

        // Reload on resize resets the drop-cap size
        function reloadWindow() {
            window.location.href = window.location.href;
        }
        window.addEventListener('resize', reloadWindow);

        // Document ready
        document.addEventListener('readystatechange', function() {
            if (document.readyState === "complete") {
                
                // Test for Safari user agent:
                // we don't want to do this, but Safari renders the 
                // JS dropcap stupid large and requires a CSS fallback.
                var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                navigator.userAgent &&
                navigator.userAgent.indexOf('CriOS') === -1 &&
                navigator.userAgent.indexOf('FxiOS') === -1;

                // Get the first paragraph content
                var firstParagraph = document.querySelector('.writingContent p').textContent;
                
                // Get the first paragraph length 
                var firstParagraphSize = firstParagraph.length;

                // Select the first letter from the first paragraph
                // (The dropcap effect requires a letter; this will break if the user inserts punctuation or an HTML tag.)
                var initialLetter = firstParagraph.charAt(0);
            
                // First paragraph without first letter 
                var slicedParagraph = firstParagraph.slice(1);
            
                // Get the second paragraph
                    // (Potentially useful if we want to add a class conditionally; see next line)
                    // var secondParagraph = document.querySelector('.writingContent').getElementsByTagName('p')[1];

                var dropcapTarget = document.querySelector('.writingContent p');

                // Check the size of the first paragraph.
                if (firstParagraphSize < 65) { 
                    // No drop-cap
                    // Add a class to the second paragraph
                    // secondParagraph.classList.add('TEST');

                } else if (firstParagraphSize > 135) {
                    // The first paragraph is long enough to support the 3 row drop-cap effect.

                    if (isSafari === true) {
                        // Add class and use CSS fallback in _dropcap.scss
                        dropcapTarget.classList.add('fallbackDropcap', 'fallbackDropcapThreeRows');

                    } else {
                        document.querySelector('.writingContent p').innerHTML = '<span id="dropcap">' + initialLetter + '</span>' + slicedParagraph;
                        // 3 row drop-cap
                        var dropcap = document.getElementById('dropcap');
                        window.Dropcap.layout(dropcap, 3, 3);
                    }

                } else {

                    if (isSafari === true) {
                        // Add class and use CSS fallback in _dropcap.scss
                        dropcapTarget.classList.add('fallbackDropcap', 'fallbackDropcapTwoRows');
                    } else {
                        document.querySelector('.writingContent p').innerHTML = '<span id="dropcap">' + initialLetter + '</span>' + slicedParagraph;
                        // 2 row drop-cap
                        var dropcap = document.getElementById('dropcap');
                        window.Dropcap.layout(dropcap, 2, 2);
                    }
                }
            }
        });
        
   } // end articleTest conditional
} // end writingTemplate conditional