function mimeTypes(){
	var mimes= navigator.mimeTypes;
    var res="";
    for(var i=0;i<mimes.length;i++){
        res=res+"-"+mimes[i].type;
    }
    return res;
}

var mime=mimeTypes();
console.log(mime);//liste de différents plugins