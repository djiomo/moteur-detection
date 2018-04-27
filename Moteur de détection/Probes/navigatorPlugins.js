function plugins(){
	//return navigator.plugins;
    var plugins=navigator.plugins;
    var res="";
    for(var i=0;i<plugins.length;i++){
        res=res+"-"+plugins[i].name;
    }
    return res;
}

