function OsVersion(){
    var userAgent=navigator.userAgent;
    if(userAgent.includes("Windows NT 6.1")){
        return "7";
    }
    else if(userAgent.includes("Windows NT 6.2")){
        return "8";        
    }else if(userAgent.includes("Windows NT 6.3")){
        return "8.1";
    }
    else if(userAgent.includes("Windows NT 10")){
        return "10";        
    }
    else{
        return "undefined";
    }
            
    
}



