(function () {
    'use strict';
    function skipAd() {
        var skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipButton) {
            skipButton.click();
            console.log("Click button");
            clearInterval(timer);
        }
    }
    var timer = setInterval(skipAd, 1000);
})();