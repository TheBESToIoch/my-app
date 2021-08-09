import React, { Component } from "react";
import "./App.css";

import Select from 'react-select';

// const PLACES = [
//   { name: "Mexico city", zip: "94303" },
//   { name: "San Jose", zip: "94088" },
//   { name: "Santa Cruz", zip: "95062" },
//   { name: "Honolulu", zip: "96803" }
// ];

// const PLACES2 = [
//   { name: "Mozyr", index: "809"},
//   { name: "Gomel", index: "800"},
//   { name: "Minsk", index: "803"}
// ];

const options = [
  {value: 'Mozyr',index: "1"},
  {value: 'Gomel',index: "2", label: 'Gomel'},
  {value: 'Minsk',index: "3", label: 'Minsk'},
  {value: 'Samara',index: "4", label: 'Samara'},
  {value: 'Moscow',index: "5", label: 'Moscow'},
  {value: 'London',index: "6", label: 'London'},
  {value: 'Paris',index: "7", label: 'Paris'},
  {value: 'Madrid',index: "8", label: 'Madrid'},
  {value: 'Kiev',index: "9", label: 'Kiev'},
  {value: 'Mexico',index: "10", label: 'Mexico'},
  {value: 'Oslo',index: "11", label: 'Oslo'},
  {value: 'Praga',index: "12", label: 'Praga'},
  {value: 'Niger',index: "13", label: 'Niger'},
  {value: 'Rabat',index: "14", label: 'Rabat'},
  {value: 'Berlin',index: "15", label: 'Berlin'},
  {value: 'Rome',index: "16", label: 'Rome'},
  {value: 'Barcelona',index: "17", label: 'Barcelona'},
  {value: 'Talin',index: "18", label: 'Talin'},
  {value: 'Pekin',index: "19", label: 'Pekin'},
  {value: 'Tokio',index: "20", label: 'Tokio'},
  {value: 'Milan',index: "21", label: 'Milan'},
  {value: 'Brazilia',index: "22", label: 'Brazilia'},
  {value: 'Kair',index: "23", label: 'Kair'},
  {value: 'Riga',index: "24", label: 'Riga'},
  {value: 'Sochi',index: "25", label: 'Sochi'},
  {value: 'Grodno',index: "26", label: 'Grodno'},
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

    // const zip = this.props.zip;
    // const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
    //   zip +
    //   "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    // fetch(URL).then(res => res.json()).then(json => {
    //   this.setState({ weatherData: json });
    // });
    // console.log("zip = "+zip);
    // console.log(URL);


    // const cityName = this.props.cityName;
    let cityName3 ="Mozyr";
    cityName3 = this.props.cityName2;
    if (cityName3 === undefined){
      cityName3 = "Mozyr";
    }
      
      const URL2 = "https://weather-app-vms.herokuapp.com/weather/"+cityName3;
      fetch(URL2).then(res2 => res2.json()).then(json => {
      this.setState({ weatherData2: json });
      });
    
    

    // const weatherData2 = this.state.weatherData2;
    
   
    // console.log("WD2="+weatherData2);
    // const iconID = weatherData2.weatherID;
    // const iconUrl = "http://openweathermap.org/img/wn/"+ iconID + "@2x.png";
    
  }
  render() {
    // const weatherData = this.state.weatherData;
    // if (!weatherData) return <div>Loading</div>;
    // const weather = weatherData.weather[0];
    // const cityName2 = this.props.cityName2;
    
    let cityName3 = this.props.cityName2;
    // console.log("CN2"+cityName2);

    const weatherData2 = this.state.weatherData2;
    if (!weatherData2) return <div>Loading</div>;
    // const weather2 = weatherData2.weatherID;
    // console.log("w2="+ weather2);
    const iconID = weatherData2.iconId;

    // let icon = "";
    // if (iconID === 803 || iconID === 804)
    // { 
    //   icon = "04";
    // } else if (iconID === 801)
    // {
    //   icon = "02";
    // } else if (iconID === 802)
    // {
    //   icon = "03";
    // } else if (iconID === 800)
    // {
    //   icon = "01";
    // } else if (iconID ===701 || iconID===711 || iconID===721 || iconID===731 || iconID===741|| iconID===751 || iconID===761 || iconID===762 || iconID===771|| iconID===781 )
    // {
    //   icon = "50";
    // } else if (iconID===600 || iconID===601 || iconID===602 || iconID===611 || iconID===612 || iconID===613 || iconID===615 || iconID===616 || iconID===620 || iconID===621 || iconID===622)
    // {
    //   icon = "13"
    // } else if (iconID===300 || iconID===301 || iconID===302 || iconID===310 || iconID===311 || iconID===312 || iconID===313 || iconID===314 || iconID===321 || iconID===520 || iconID===521|| iconID===522 || iconID===531)
    // {
    //   icon ="09";
    // } else if (iconID===511) 
    // {
    //   icon = "13";
    // } else if (iconID===500|| iconID===501 || iconID===502 || iconID===503 || iconID===504)
    // {
    //   icon ="10";
    // } else if (iconID===200 || iconID===201 || iconID===202 || iconID===210 || iconID===212 || iconID===211 || iconID===221 || iconID===230 || iconID===231 || iconID===232)
    // {
    //   icon = "11";
    // }
  
    // console.log("i="+icon+"  "+ iconID);

    let iconUrl = "http://openweathermap.org/img/wn/"+ iconID + "@2x.png";
   
    // let temp = weatherData2.temp;
    // console.log("cityName = " + this.props.cityName);
    // let fotoTemp;
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

    // if (temp >25)
    // {
    //   fotoTemp = temp_40;
    // } else if (temp >=20 || temp < 25)
    // {
    //   fotoTemp = temp_25;
    // }
    cityName3 = this.props.cityName2;
    if (cityName3 === undefined){
      cityName3 = "Mozyr";
    }

    // console.log(temp);
    // console.log(weather2);
    
    // const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div className="wrapper">
        <p className="name-city">{cityName3}</p>
        <div className="content">
        <div className="weather-parametr"><img src="humidity.svg" alt="" width="150px" height="auto"></img><br></br><span className="text-content">Humidity: {weatherData2.humidity}%</span></div>
        <p className="weather-parametr"><img src="wind_speed.svg" alt="" width="150px" height="150px"></img><br></br><span className="text-content">Wind speed: {weatherData2.windSpeed} m/s, Direction: {weatherData2.direction}</span></p>
        <p className="weather-parametr"><img src="barometer.svg" alt="" width="150px" height="auto"></img><br></br><span className="text-content">Pressure: {weatherData2.pressure} mm</span></p>
        <p className="weather-parametr"><img src={iconUrl} alt="" width="150px" height="auto"></img><br></br><span className="text-content">Current Temperature: {weatherData2.temp}°</span></p>
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
      selectedOption: 0,
      activePlace: 0
    };
  }
  // state = {
  //   selectedOption: null,
  // };
 
  handleChange = (selectedOption) => {
    
    // this.setState({ selectedOption }, () =>
    //   console.log(`Option selected:`, this.state.selectedOption),
      
    // );
    // this.setState({ activePlace2: index2 });
    this.setState({selectedOption}, function(){
      // let abc = this.state.selectedOption.value;
      // console.log("value = " + abc);
      // console.log(`Option selected:`, this.state.selectedOption);
      // console.log(`Option selected2:`, this.state.selectedOption);
    })
      
  };

  render() {
    // const activePlace = this.state.activePlace;
    // const activePlace2 = this.state.activePlace2;
    const { selectedOption } = this.state;
    const cityName2 = this.state.selectedOption.value;
    const indexz = this.state.selectedOption.index;
    
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
        
        
         {/* {PLACES2.map((place2, index2) => (
          <button
            key={index2}
            onClick={() => {
              this.setState({ activePlace2: index2 });
            }}
          >
            {place2.name}
          </button>
        ))} */}
        <div className="wrapper">
          <div className="select"> 
           <Select
              key={indexz}
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
             />
            </div> 
           </div>
        <WeatherDisplay key={indexz}  cityName2={cityName2} />
      </div>
    );
  }
}
// cityName={PLACES2[activePlace2].name}
// zip={PLACES[activePlace].zip}
// {PLACES2[activePlace2].name}
export default App;
