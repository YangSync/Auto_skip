(function () {
    'use strict';
    function skipAd() {
        var skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipButton) {
            skipButton.click();
            console.log("Auto_skip");
            clearInterval(t);
        }
    }
    var t = setInterval(skipAd, 1000);
})();
