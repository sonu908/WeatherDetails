

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchtemp();
  }
});

async function searchtemp() {
  let cityname = inputsearch.value

  if (!cityname) {
    alert('Field Is Empty')
  }
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
  data.json().then(
    output => weatherinfo(output)
  )
}

function weatherinfo(output) 
{
  let searchresult = output

  let name=searchresult.name
  let temp = Math.floor(searchresult.main.temp - 273.15)
  let feels_like = Math.floor(searchresult.main.feels_like - 273.15) 
  let humidity = searchresult.main.humidity
  let windspeed = searchresult.wind.speed
  let description = searchresult.weather[0].description
 
let html_data = `


<div class="parameters" style="font-family: 'Oswald', sans-serif;" >
<h3 id="cityname" >  ${name}</h3>
<h1 id="citytemp" style="font-weight: bolder;" >${temp} °C</h1>
<h4 id="citydesc" >${description}</h4>
<h4 id="cityfeels_like" > feelslike a: ${feels_like }°C</h4>
<h4 style="padding-bottom: 10px;  font-size: large; text-align: end; margin-right: 30px;  " id="cityhumidity" > humidity: ${humidity}%</h4>
<h4 style="padding-bottom: 10px;  font-size: large; text-align: end; margin-right: 30px;  " id="citywind" > windspeed: ${windspeed}km/h</h4>



</div >

`
 

   

    result.innerHTML = html_data


}
