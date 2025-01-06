let displaycity = document.getElementById("displaycity");
let displayweather = document.getElementById("displayweather");
let displaytemp = document.getElementById("displaytemp");
let weatherbtn = document.getElementById("weatherbtn");



weatherbtn.addEventListener("click",function(){

    let cityname = document.getElementById("cityname").value;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b4ebc06aa1c15b20835aec61c8b210a&units=imperial`;
    fetch(weatherURL)                                                       
    .then(response=>response.json())
    .then(data=>
    {
        displayweather.innerHTML=data.weather[0].main;
        displaytemp.innerHTML = `${data.main.temp}°F`;
      
  
        switch(data.weather[0].main){
            case 'Haze':
                img.src="haze.png";
                break;

            case 'Sunny':
                img.src="sunny.png";
                break;
                
            case 'Clouds':
                img.src="cloud.png";
                break;
                
            case 'Mist':
                img.src="mist.jpg";
                break;

             case 'Rain':
                img.src="rainy.png";
                    break;    
            
            default:
                img.src="default.png";
                break;        
        }

    }
    )
  
});