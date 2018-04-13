function detectorTor(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var h1=screen.height;
    var w1=screen.width;
    if(h==h1 & w==w1){
        return "Navigator is Tor";
    }
    else{
        return "Navigator is not Tor"
    }
}

console.log(detectorTor());