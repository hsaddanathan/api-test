console.log("Hello World");
var appID = "85333a6d"
var appKey = "a4622733e5431b0ef1d2571c8a7a0ec7"

queryURL= "http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id="+appID+"&app_key="+ appKey +"&results_per_page=20&what=javascript%20developer&content-type=application/json"
console.log(queryURL);