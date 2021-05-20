const Car = {
    "make":"Honda",
    "colors":["White","Red"]
    
}

var apiUrl = 'https://api.tvmaze.com/search/shows?q=batman';
fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    });