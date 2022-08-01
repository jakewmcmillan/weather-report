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
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + city + '&lon=' + city + '&appid=83fbcfea79bf43f1175191821f296c01';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayRepos(data.items, language);
                });
            } else {
            alert('Error: '+ response.statusText);
        }
    })
    .catch(function (error) {
        alert('Unable to retrieve weather');
    });
};

var getFeaturedRepos = function (language) {
    var apiUrl = '' + city;

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayRepos(data.items, city);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });
};

var displayRepos = function (repos, searchTerm) {
    if (repos.length === 0) {
        reposContainerEl.textContent = 'No repositories found.';
        return;
    }

    repoSearchTerm.textContent = searchTerm;

    for (var i = 0; i < repos.length; i++) {
        var repoName = repos[i].coord.lon + repos.coord.lat;

        var repoEl = document.createElement('div');
        repoEl.classList = 'list-item flex-row justify-space-between align-center';

        var titleEl = document.createElement('span');
        titleEl.textContent = repoName;

        repoEl.appendChild(titleEl);

        var statusEl = document.createElement('span');
        statusEl.classList = 'flex-row align-center';

        repoEl.appendChild(statusEl);

        repoContainerEl.appendChild(repoEl);
    }
};

