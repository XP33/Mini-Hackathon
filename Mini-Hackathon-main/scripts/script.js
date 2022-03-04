let cityInput = "";
let APIKey = "6630db38bc458f86d347a377cfc13445";
let dados;

function askUserPermission() {
    const userResponse = confirm("Podemos usar a sua localização?");
    if (userResponse === true) {
        //Geolocation API ativa e pega os dados da cidade do usuário
    } else {
        //Abre um form pedindo os dados 
        insertZipCode();

    }
}

function insertZipCode() {
    let screenSelector = document.querySelector("main");

    screenSelector.innerHTML =
        `<div class="box-zipcode "> 
        <div class="box-answer">
            <input class="input-city" type = "text" placeholder = "Digite a sua cidade" >
            <button type = "submit" onclick="callWeatherInformation()"> Enviar </button> 
            </div> 
            </div>
            
            <div class="main-box">
            <br>
    </div>`


}


function callWeatherInformation() {
    cityInput = document.querySelector(".input-city").value;

    getWeatherInformationsByCity();
}



function getWeatherInformationsByCity() {
    const promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${APIKey}`)
    promise.then(showWeatherInformation)
}

//  promise.catch(putInformationCorrectly)   

getWeatherInformationsByCity()

function showWeatherInformation(response) {
    dados = response.data;
    console.log("ENTREI DIACHO")
    console.log(dados);
    const objectData = response.data;
    const infoWeather = objectData.main;

    let mainContent = document.querySelector(".box-answer");

    let temp = convertionCelsius(infoWeather.temp);
    let feels_like = convertionCelsius(infoWeather.feels_like);
    let temp_min = convertionCelsius(infoWeather.temp_min);
    let temp_max = convertionCelsius(infoWeather.temp_max);
    let pressure = infoWeather.pressure;
    let humidity = infoWeather.humidity;

    let content = mainContent.innerHTML = `
    Temperatura local: ${temp.toFixed(2)} °C <br>
    Sensação térmica: ${feels_like.toFixed(2)} °C  <br>
    Temperatura máxima:${temp_max.toFixed(2)} °C <br>
    Temperatura mínima:${temp_min.toFixed(2)} °C <br>
    Pressão: ${pressure.toFixed(2)} <br>
    Umidade: ${humidity.toFixed(2)} % <br>
    `
}

function convertionCelsius(temperature) {
    let celsius = ((temperature) - 32) * (5 / 9);
    return celsius
}