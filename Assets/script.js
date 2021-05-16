var cities = [];

var cityFormEl=document.querySelector("#city-search-form");
var cityInputEl=document.querySelector("#city");
var pastSearchButtonEl=document.querySelector("past-search-buttons");
var weatherContainerEl=document.querySelector("current-weather-container");
var citySearchInputEl=document.querySelector("#searched-city");
var forecastTitle=document.querySelector("#forecast");
var forecastContainerEl=document.querySelector("#fiveday-container");

var formSubmitHandler = function(event) {
    event.preventDefault();
    var city=cityInputEl.nodeValue.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInputEl.value = "";
    } else {
        alert("Please enter a City");
    }
    saveSearch();
    pastSearchButtonEl(city);
}

var saveSearch = function() {
    localStorage.setItem("cities", JSON.stringify(cities));
}
