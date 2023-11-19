(function () {
    'use strict';
    var t;

    function skipAd() {
        try {
            let fulfilledLayout = document.getElementById('fulfilled-layout');
            if (fulfilledLayout) {
                fulfilledLayout.remove();
                console.log('移除成功');
            }
        } catch (error) {
            ;
        }

        try {
            let sb1 = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
            if (sb1) {
                sb1.click();
                console.log('ytp-ad-skip-button-modern success');
                //clearInterval(t);
            } else {
                ;
            }
        } catch (error) {
            ;
        }

        try {
            let sb2 = document.querySelector('.ytp-ad-skip-button');
            if (sb2) {
                sb2.click();
                console.log('ytp-ad-skip-button success');
                //clearInterval(t);
            } else {
                ;
            }
        } catch (error) {
            ;
        }
    }
    t = setInterval(skipAd, 1000);
})();
