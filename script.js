console.log("Hello World");
// var apiKey = "f42ef891693439835d1382bcf89d8e57"
// var queryURL = "https://developers.zomato.com/api/v2.1/"

// $.ajax({
//     // url: queryURL + "cities?=Atlanta&apikey=" + apiKey,
//     url: "https://api.openbrewerydb.org/breweries/search?query=sweetwater",
//     method: "GET"
// }).then(function(response){
//     console.log(response)
// })

// var urlBase = "https://api.teleport.org/api/countries/?search="
// var searchCity = "atlanta"
// var queryURL = "https://api.teleport.org/api/cities/?search=Palo%20Alto%2C%20California&embed=city%3Asearch-results%2Fcity%3Aitem%2Fcity%3Aurban_area%2Fua%3Ascores"



// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);
//     console.log(response._embedded);
//     console.log(response._embedded["city:search-results"]);
//     console.log(response._embedded["city:search-results"][0]._embedded["city:item"]._embedded["city:urban_area"]);
//     console.log(response._embedded["city:search-results"][0]._embedded["city:item"]._embedded["city:urban_area"]._embedded["ua:scores"].categories);
//     console.log(response._embedded["city:search-results"][0]._embedded["city:item"]._embedded["city:urban_area"]._embedded["ua:scores"].categories[0].__proto__);
//     var uaScores = response._embedded["city:search-results"][0]._embedded["city:item"]._embedded["city:urban_area"]._embedded["ua:scores"].categories[0].__proto__
//     $("#test").append(uaScores)
// });

console.log("Hello World");
$(document).ready(function () {
  console.log("ready");
  // var queryURL =
  //   "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=be3ea934&app_key=92b7a058356afbbaa6b1cf90c7bae1c1&results_per_page=20&what=javascript%20developer&content-type=application/json";
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function (response) {
  //   console.log(response);
  // });




var apiBase = "https://api.teleport.org/api/cities/?search="
var querySecondURL = ""

 

function geoIdentify(){
  var searchCity = $("#inputGroupSelect03").val()
  console.log(searchCity);

  
  $.ajax({
    url: apiBase + searchCity,
    method: "GET"
  }).done(function (response) {
  //   searchCity = $("#inputGroupSelect03").val()
    console.log(response);
  //   console.log(response._embedded["city:search-results"][0]._links["city:item"].href)
  
    querySecondURL = response._embedded["city:search-results"][0]._links["city:item"].href;
    console.log(querySecondURL);
    // var embedBody = '<a class="teleport-widget-link" href="https://teleport.org/cities/aarhus/">Life quality score - Aarhus</a><script async class="teleport-widget-script" data-url="https://teleport.org/cities/aarhus/widget/scores/?currency=USD&citySwitcher=false" data-max-width="420" data-height="968" src="https://teleport.org/assets/firefly/widget-snippet.min.js"></script>';
    // $("#life-quality").append(embedBody)
});
};


function urbanSlug(){
  $.ajax({
    url: querySecondURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
});
};



$("#submit").on("click",function(event){
  event.preventDefault();
  
  geoIdentify();
  console.log(querySecondURL);
  urbanSlug();

});

});