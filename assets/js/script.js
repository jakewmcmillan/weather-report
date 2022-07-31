var citySearchEl = document.querySelector('#city-search');
var cityOutputEl = document.querySelector('#city-output');
var cityInputEl = document.querySelector('#city');
var reposContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getCityRepos(cityName);

        reposContainerEl.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Please enter a City name');
    }
};

var buttonClickHandler = function (event) {
    var language = event.target.getAttribute('data-language');

    if (language){
        getFeaturedRepos(language);

        reposContainerEl.textContent = '';
    }
};

var getCityRepos = function (city) {
    
}