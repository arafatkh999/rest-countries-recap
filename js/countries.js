const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data=>displayCountries(data));
}

const displayCountries = countries =>{
    console.log(countries[0]);
    const allCountriesHtml = countries.map(country =>getCountriesHtml(country));
    // console.log(allCountriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML=allCountriesHtml.join(' ');

}

//Option-2
const getCountriesHtml = ({name,flags,area,population}) =>{
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <p>Area - ${area} </p>
    <p>Population - ${population} </p>
    <img src="${flags.png}">
    
    </div>
    `
}


//Option-1
// const getCountriesHtml = country =>{
//     //option-1
//     const {name,flags} = country;
//     return `
//     <div class="country">
//     <h2>${name.common}</h2>
//     <img src="${flags.png}">
//     </div>
//     `
// }


//Original
// const getCountriesHtml = country =>{
//     return `
//     <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}">
//     </div>
//     `
// }

loadCountries();