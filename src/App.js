import React, { Component } from "react";
import "./App.css";
import temp_40 from './temp_40.svg';
import temp_25 from './temp_25.svg';
import temp_10 from './temp_10.svg';
import temp__10 from './temp_-10.svg';
import temp__20 from './temp_-20.svg';

const PLACES = [
  { name: "Mexico city", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

const PLACES2 = [
  { name: "Mozyr", index: "809"},
  { name: "Gomel", index: "800"},
  { name: "Minsk", index: "803"}
];

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      weatherData2: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
    console.log("zip = "+zip);
    // console.log(URL);


    const cityName = this.props.cityName;
    const URL2 = "https://weather-app-vms.herokuapp.com/weather/"+cityName;
    fetch(URL2).then(res2 => res2.json()).then(json => {
      this.setState({ weatherData2: json });
    });

  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];


    const weatherData2 = this.state.weatherData2;
    if (!weatherData2) return <div>Loading</div>;
    const weather2 = weatherData2.weatherID;

    
    
    let temp = weatherData2.temp;
    console.log("cityName = " + this.props.cityName);
    let fotoTemp;
    // if(temp >= 40){
    //   fotoTemp = temp_40;
    // } else if (temp >= 25 || temp < 40)
    // {
    //   fotoTemp = temp_25;
    // } else if (temp >=10 || temp < 25)
    // {
    //   fotoTemp = temp_10;
    // } else if (temp >=-10 || temp <10)
    // {
    //   fotoTemp = temp__10;
    // } else if (temp < -10)
    // {
    //   fotoTemp = temp__20;
    // }

    if (temp >25)
    {
      fotoTemp = temp_40;
    } else if (temp >=20 || temp < 25)
    {
      fotoTemp = temp_25;
    }


    // console.log(temp);
    // console.log(weather2);

    // const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div className="wrapper">
        <p className="name-city">{this.props.cityName}</p>
        <div className="content">
       

        
        <div className="weather-parametr"><img src="humidity.svg" width="150px" height="auto"></img><br></br><span className="text-content">Humidity: {weatherData2.humidity}</span></div>
        <p className="weather-parametr"><img src="wind_speed.svg" width="150px" height="150px"></img><br></br><span className="text-content">Wind speed: {weatherData2.windSpeed}, Direction: {weatherData2.direction}</span></p>
        <p className="weather-parametr"><img src="barometr.svg" width="150px" height="auto"></img><br></br><span className="text-content">Pressure: {weatherData2.pressure}</span></p>
        <p className="weather-parametr"><img src={fotoTemp} width="150px" height="auto"></img><br></br><span className="text-content">Current Temperature: {weatherData2.temp}°</span></p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace2 : 0,
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    const activePlace2 = this.state.activePlace2;
    return (
      <div className="App">
        {/* {PLACES.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))} */}
        <div className="header-backround">
        <div className="wrapper">
          <div className="header">
            <span className="title-text">WeatherOpenID</span>
          </div>
          </div>
          </div>
         {PLACES2.map((place2, index2) => (
          <button
            key={index2}
            onClick={() => {
              this.setState({ activePlace2: index2 });
              console.log("cityNameOnClick = "+PLACES2[activePlace2].name );
              console.log("zip" + PLACES[activePlace].zip);
            }}
          >
            {place2.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace2} zip={PLACES[activePlace].zip} cityName={PLACES2[activePlace2].name}  />
      </div>
    );
  }
}
// {PLACES2[activePlace2].name}
export default App;
