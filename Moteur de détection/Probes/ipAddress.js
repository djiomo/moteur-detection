/*var a;
$.getJSON('https://ipinfo.io/json', function(data) {
  //console.log(JSON.stringify(data, null, 2));
    a=JSON.stringify(data, null, 2);
});

console.log(a);

var jsonIssues = {};
    $.ajax({
        url: "https://ipinfo.io/json",
        async: false,
        dataType: 'json',
        success: function(data) {
            jsonIssues = data.Issues;
        }
    });

console.log(jsonIssues);*/

var it_works={} ;

jQuery.ajax({
  type: "GET",
  url: 'https://ipinfo.io/json',
  success: function (data) {
    it_works =data;
  }, 
  async: false // <- this turns it into synchronous
});

// Execution is BLOCKED until request finishes.

// it_works is available
//console.log(it_works);
//var obj=JSON.parse(it_works);
//console.log(it_works['ip']);

function getIp(){
    return it_works['ip'];
}
function hostName(){
    return it_works['hostname'];
}
function getCity(){
    return it_works['city'];
}

function getRegion(){
    return it_works['region'];
}

function getCountry(){
    return it_works['country'];
}

function getLoc(){
    return it_works['loc'];
}

function getPos(){
    return it_works['postal'];
}

function getOrg(){
    return it_works['org'];
}