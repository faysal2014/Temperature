const apiKey=`efb0ed4f06f9779f8ecae9419cda5d8d`;
const searchTemp= () =>{
    const city= document.getElementById("city-input").value;
    cityName=document.getElementById('city-input');
    cityName.value='';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data));
}

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText=text;
}

const displayTemp= temperature =>{
    setInnerText('city-name',temperature.name);
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition',temperature.weather[0].main);
    console.log(temperature);
    // set weather icon 
    const url=`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon=document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url);
    console.log(temperature.name);
}