window.addEventListener('load',()=> {
    let long,lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationCity = document.querySelector('.location-city');
    let degreeSection = document.querySelector('.degree-section');
    let degreeSectionSpan = document.querySelector('.degree-span');
   
    

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(lat);
            console.log(long);
            
            const api = `https://weather.ls.hereapi.com/weather/1.0/report.json?product=observation&latitude=${lat}&longitude=${long}&oneobservation=true&apiKey=6rH6XtfVycYzaX4buiKNvZJlH9KNV-Q2pjMdj4XaBjw`
            fetch(api).then(response => {
                return response.json();
            }).then(data => {console.log(data);
                const {city,country} = data.observations.location[0];
                const {temperature,description,iconLink,iconName} = data.observations.location[0].observation[0];
                //set DOM elements from API
                
                temperatureDegree.textContent = temperature;
                if(temperature < 20){
                    document.getElementById('weather-icon').src = "cold.png";
                }

                
                
                temperatureDescription.textContent = description;
                locationCity.textContent = city + ' , ' + country  ;
                degreeSection.addEventListener("click", function(){
                    if(degreeSectionSpan.textContent === "C"){
                        degreeSectionSpan.textContent = "F";
                        temperatureDegree.textContent = Math.floor((9/5) * temperature + 32);
                    }
                    else{
                        degreeSectionSpan.textContent = "C";
                        temperatureDegree.textContent = temperature;

                    }

                })


            });
        })
    }
    else{
        alert('please enable location');
    }
})