var policiesMap=new Map();

function addPolicies(detector,value){
    policiesMap.set(detector,value);
}
addPolicies(browser(),"Tor");
addPolicies(getCountry(),"FR")

function detectionTor(){
    if(browser()!=policiesMap.get(browser())){
        console.log("Navigator Tor: Ok");
    }
    else{
        console.log("Navigator Tor: Warning");
    }
}

function detectionCountry(){
    if(getCountry()==policiesMap.get(getCountry())){
        console.log("Country: Ok");
    }
    else{
        console.log("Country: Warning");
    }
    
    
}
function detectionEngine(){
    detectionTor();
    detectionCountry();
}

//detectionEngine();
//setInterval(function(){detectionEngine()},5000);