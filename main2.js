fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error: ", err));


const countriesList = document.getElementById("countries")


function initialize(countriesData){
    countries = countriesData;
    let options = " ";
    countries.forEach(country => options += `<option value="${country.cca2}">${country.name.common}</option>`)
    countriesList.innerHTML = options;
    displayCountryInfo()

}



function displayCountryInfo(countryByAlphaCode){
    const countryData = countries.find(country => country.official === countryByAlphaCode)
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("population").innerHTML = countryData.population;
    document.getElementById("region").innerHTML = countryData.region;
    document.querySelector("flag").innerHTML = countryData.flag;
    
}
    

// function flagsByCountry(countryByFlag){
//     const countryData = contries.find(country => country.flags === countryByFlag);
//     document.querySelector("#flag-container img").src = countryData.flag.filter(c => c.name);
//     document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
// }
