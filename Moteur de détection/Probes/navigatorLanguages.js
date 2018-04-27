function languages(){
    var lang=navigator.languages;
    var res=""
    for(var i=0;i<lang.length;i++){
        res=res+"-"+lang[i];
    }
	return res;
}
