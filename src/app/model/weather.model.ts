export interface IWeatherCoord {
  lon: number;
  lat: number;
}

export interface IWeatherWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface IWeatherWind {
  speed: number;
  deg: number;
}

export interface IWeatherClouds {
  all: number;
}

export interface IWeatherSys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  id: number;
  name: string;
  main: IWeatherMain[];
  visibility: number;
  coord: IWeatherCoord;
  weather: IWeatherWeather[];
  wind: IWeatherWind;
  clouds: IWeatherClouds;
  sys: IWeatherSys;
  base: string;
  dt: number;
  cod: string;
}
