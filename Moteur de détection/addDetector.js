//function addDetector(detector,value){
//    var table = document.getElementById("myTable");
//    var row = table.insertRow(table.rows.length);
//    var cell1 = row.insertCell(0);
//    var cell2 = row.insertCell(1);
//    cell1.innerHTML = detector;
//    cell2.innerHTML = value;
//    
//}


var obj={};
function addDetector(detector,value){
    obj[detector]=value;
}


addDetector("User Agent",userAgent());
addDetector("App Code Name",appCodeName());
addDetector("App Name",appName());
addDetector("Browser Name ",browser());
addDetector("Os",getOS());
addDetector("Os version",OsVersion());
addDetector("Device",deviceType());
addDetector("Hardware Concurrency",hardwareConcurrency());
addDetector("Touch Screen",touchDevice());
addDetector("App Version",appVersion());
addDetector("Build Id",buildId());
//addDetector("Connection Type",connectionType());
addDetector("Cookie is Enabled",CookieEnabled());
addDetector("Java is Enabled",javaIsEnabled());
addDetector("Language",getNavigatorLanguage());
addDetector("Preferred Languages",languages());
addDetector("Do not Track",NotTrack());
addDetector("Online",online());
addDetector("Platform",osCpu());
addDetector("Vendor",vendor());
addDetector("Plugins",plugins());
addDetector("Mime Types",mimeTypes());
addDetector("Screen Size",screeSize());
addDetector("Window Size",windowSize());
addDetector("Ip",getIp());
addDetector("Hostname",hostName());
//addDetector("City",getCity());
//addDetector("Region",getRegion());
addDetector("Country",getCountry());
addDetector("Location",getLoc());
//addDetector("Postal",getPos());
addDetector("Organisation",getOrg());



create(function(status){
    console.log(status);
    addDetector("Debugger",status);
    str = JSON.stringify(obj,null,'\t');
   output(syntaxHighlight(str));
});
