const key = '1z6PHo7fc4thwKBwpvAGOIisVGnUArVF';                                          //free api key

let citySearch = async (city) => {                                                       //get city details
    let url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    let cityApi = `?apikey=${key}&q=${city}`

    let response = await fetch(url + cityApi);
    let data = await response.json();
    return data[0];
}

let temperature = async (cityKey) => {                                                  //get temperature details for city
    let url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    let cityApi = `${cityKey}?apikey=${key}`;

    let response = await fetch(url + cityApi);
    let data = await response.json();
    return data[0];
}

let temp = document.querySelector('#temperature');                                     //get temperature container
let description = document.querySelector('#description');                              //get description container
let icon = document.querySelector('.icon');                                            //get icon container

let grad = 'Belgrade';                                                                 //temperature only for Belgrade                                              
let cityKey;
citySearch(grad).then(obj => {                                              
    cityKey = obj.Key;                                                                 //get city key from object
    temperature(cityKey).then(obj =>{                                                  //get tepmerature from object                                          
        temp.innerHTML = obj.Temperature.Metric.Value;                                 //insert temperature in it's container                  
        description.innerHTML = obj.WeatherText;                                       //insert description in it's container
        icon.innerHTML = `<img src="../src/icons/${obj.WeatherIcon}.svg">`             //insert icon in it's container
    })
});