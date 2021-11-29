// fetch("https://restcountries.com/v3.1/all")
// .then(function(res){
//     return res.json();
// })
// .then(function(data){
//     console.log(data);
// })

// .catch(function(err){
//     console.log("Error: ", err);
// });

const countriesList = document.getElementById("countries")
fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error: ", err));


function initialize(countriesData){
    countries = countriesData;
    let options =  " ";
    // for(let i=0; i<countries.length;  i++){
    //     options += `<option value="${countries[i].cca2}">${countries[i].name.common}</option>`;
        
    // }
    countries.forEach(country => options += `<option value="${country.cca2}">${country.name.common}</option>` )
    countriesList.innerHTML = options;
    // document.getElementById("countries").innerHTML = options;
    displayCountryInfo()
    
}
// function countryComponent ({ name, currencies }) { 
//     return `<option value="${currencies}">${name}</option>`
//     let finalCountries = []
//   }

function displayCountryInfo(countryByAlphaCode){
    const countryData = countries.find(country => country.official === countryByAlphaCode);
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("population").innerHTML = countryData.population;
    document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
    

    
}
