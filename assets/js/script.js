var citySearchEl = document.querySelector('#city-search');
var cityOutputEl = document.querySelector('#city-output');
var cityInputEl = document.querySelector('#city');
var reposContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var searchEl = document.querySelector('.btn');

var getCityRepos = function (event) {
    event.preventDefault();
    var city = document.querySelector('#city').value;
    console.log(city);
    
    var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=83fbcfea79bf43f1175191821f296c01';

    fetch(apiUrl)
    .then(function (response) {
        return response.json()
})
    .then(function (data) {
        console.log(data);
        var latitude = data[0].lat;
        var longitude = data[0].lon;

        console.log(latitude, longitude);
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&exclude=hourly&appid=83fbcfea79bf43f1175191821f296c01')
    .then(function (response) {
        return response.json()
})
    .then(function (data) {
        console.log(data, 'second fetch');
        document.querySelector('#city-name').textContent = 'City: ' + data.timezone
        document.querySelector('#city-temperature').textContent = 'Temperature: ' + data.current.temp
        document.querySelector('#city-humidity').textContent = 'Humidity: ' + data.current.humidity
        document.querySelector('#city-wind-speed').textContent = 'Wind Speed: ' + data.current.wind_speed
        document.querySelector('#city-uv-index').textContent = 'UV Index: ' + data.current.uvi
        document.querySelector('#city-uv-index').style.color = 'red'
    })   

    })
}

searchEl.addEventListener('click', getCityRepos);