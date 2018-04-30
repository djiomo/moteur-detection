var Detectors={
    _tor:function () {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var h1=screen.height;
        var w1=screen.width;
        if(h==h1 & w==w1){
            return true;
        } else{
            return false;
        }
    },
    _touchDevice:function () {
        if (window.navigator.msMaxTouchPoints) {
            return "True";
        } else {
            return "False";
        }
        },
    _debugger:function () {
        if (
            window.Firebug &&
            window.Firebug.chrome &&
            window.Firebug.chrome.isInitialized
        )
        {
            return;
        }
        var r = /./;
        r.toString = function() {
            checkStatus =true;
        };
        checkStatus = false;
        console.log("%c", r);
        return checkStatus;
        },
};