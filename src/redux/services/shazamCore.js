const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '10581b7463mshb242afa21c350d6p117f35jsn53d613d44f92',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));