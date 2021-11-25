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
    countries.forEach(country => options += `<option value="${countries[i].cca2}">${countries[i].name.common}</option>` )
    countriesList.innerHTML = options;
    // document.getElementById("countries").innerHTML = options;
    
}

function displayCountryInfo(countryByAlphaCode){
    const countryData = countries.find(country => country.c= countryByAlphaCode);
    console.log(countryData);
    document.getElementById("capital").innerHTML = countryData.capital;
    
}