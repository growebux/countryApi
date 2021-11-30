fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error: ", err));


const countriesList = document.getElementById("countries")


function initialize(countriesData){
    countries = countriesData;
    let options = " ";
    countries.forEach(country => options += `<option value=${country.cca2}">${country.name.common}</options>`)
    countriesList.innerHTML = options;
    displayCountryInfo()

}


function displayCountryInfo(countryByAlphaCode){
    const countryData = countries.find(country => country.official === countryByAlphaCode);
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("population").innerHTML = countryData.population;
    
}

function flagsByCountry(countryByFlag){
    const countryData = contries.find(country => country.flags === countryByFlag);
    document.querySelector('#flag-container img').src = countryData.flags.filter(f = f.flags).map(f => `${f.svg}`)
}