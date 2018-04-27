var detectorsJson={};
function addDetectorToJson(key,value){
    detectorsJson[key]=value;
}

addDetectorToJson("User Agent",userAgent());
addDetectorToJson("App Code Name",appCodeName());
addDetectorToJson("App Name",appName());
addDetectorToJson("Browser Name ",browser());
addDetectorToJson("Os",getOS());
addDetectorToJson("Os version",OsVersion());
addDetectorToJson("Device",deviceType());
addDetectorToJson("Hardware Concurrency",hardwareConcurrency());
addDetectorToJson("Touch Screen",touchDevice());
addDetectorToJson("App Version",appVersion());
addDetectorToJson("Build Id",buildId());
//addDetector("Connection Type",connectionType());
addDetectorToJson("Cookie is Enabled",CookieEnabled());
addDetectorToJson("Java is Enabled",javaIsEnabled());
addDetectorToJson("Language",getNavigatorLanguage());
addDetectorToJson("Preferred Languages",languages());
addDetectorToJson("Do not Track",NotTrack());
addDetectorToJson("Online",online());
addDetectorToJson("Platform",osCpu());
addDetectorToJson("Vendor",vendor());
addDetectorToJson("Plugins",plugins());
addDetectorToJson("Mime Types",mimeTypes());
addDetectorToJson("Screen Size",screeSize());
addDetectorToJson("Window Size",windowSize());
addDetectorToJson("Ip",getIp());
addDetectorToJson("Hostname",hostName());
//addDetector("City",getCity());
//addDetector("Region",getRegion());
addDetectorToJson("Country",getCountry());
addDetectorToJson("Location",getLoc());
//addDetector("Postal",getPos());
addDetectorToJson("Organisation",getOrg());

var dictString=JSON.stringify(detectorsJson);
var fs=require(['fs']);
fs.writeFile('policies.json',dictString);

console.log(detectorsJson);
