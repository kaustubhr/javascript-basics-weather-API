window.addEventListener('load',()=> {
    let long,lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let highTemperatureDegree = document.querySelector('.high-temperature-degree');
    let lowTemperatureDegree = document.querySelector('.low-temperature-degree');

    let locationCity = document.querySelector('.location-city');
    let degreeSection = document.querySelector('.t');
    let degreeSectionSpan = document.querySelector('.degree-span');
    let weathericon = document.getElementById('weather-icon');
   
    

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(lat);
            console.log(long);
            
            const api = `https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&latitude=${lat}&longitude=${long}&oneobservation=true&apiKey=6rH6XtfVycYzaX4buiKNvZJlH9KNV-Q2pjMdj4XaBjw`
            fetch(api).then(response => {
                return response.json();}
                )
                .then(data => {console.log(data);
                const {city,country} = data.observations.location[0];
                const {highTemperature,lowTemperature,temperature,description,iconLink,icon} = data.observations.location[0].observation[0];
                weathericon.src = "https://weather.api.here.com/static/weather/icon/"+ icon + ".png";
                temperatureDegree.textContent = temperature;
                highTemperatureDegree.textContent = highTemperature;
                lowTemperatureDegree.textContent = lowTemperature;   
                
               
                
                temperatureDescription.textContent = description;
                locationCity.textContent = city + ' , ' + country  ;
                degreeSection.addEventListener("click", function(){
                    if(degreeSectionSpan.textContent == "C"){
                        degreeSectionSpan.textContent = "F";
                        temperatureDegree.textContent = Math.floor((9/5) * temperature + 32);
                        highTemperatureDegree.textContent = Math.floor((9/5) * highTemperature + 32);
                        lowTemperatureDegree.textContent = Math.floor((9/5) * lowTemperature + 32);
                    }
                    else{
                        degreeSectionSpan.textContent = "C";
                        temperatureDegree.textContent = temperature;
                        highTemperatureDegree.textContent = highTemperature;
                        lowTemperatureDegree.textContent = lowTemperature;


                    }

                })
            });


            });
        
    }//end of if
    else{
        alert('please enable location');
    }
});
