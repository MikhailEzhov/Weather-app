class WeatherService {


    // получить ресурсы c url адреса
    getResource = async (url) => {
        let res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    }



    // получить текущую погоду по городу
    getCurrentWeatherByCity = async (city = 'London') => {
        const res = await this.getResource(`https://pi.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9c28f87f8cae1531b8dab5b2f429f827`);
        // console.log(res);
        return this._transformCurrentWeather(res); // один объект
    }



    // получает данные текущей погоды, трансформирует их, возвращает объект уже только с нужными данными:
    _transformCurrentWeather = (currentWeather) => {
        return {
            name: currentWeather.name,
            country: currentWeather.sys.country,
            icon: currentWeather.weather[0].icon,
            description: currentWeather.weather[0].description,
            temp: currentWeather.main.temp,
            feelsLike: currentWeather.main.feels_like,
            wind: currentWeather.wind.speed,
            humidity: currentWeather.main.humidity,
            pressure: currentWeather.main.pressure,
        }
    }




    // получить почасовой прогноз по городу
    getHourlyForecastByCity = async (city = 'London') => {
        const res = await this.getResource(`https://pi.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=9c28f87f8cae1531b8dab5b2f429f827`); 
        console.log(res);
        return this._transformHourlyForecast(res);
    }


    // получает данные почасового прогноза, трансформирует их, возвращает объект уже только с нужными данными:
    _transformHourlyForecast = (hourlyForecast) => {
        return {
            name: hourlyForecast.city.name,
            country: hourlyForecast.city.country,

            date0: hourlyForecast.list[0].dt_txt,
            icon0: hourlyForecast.list[0].weather[0].icon,
            temp0: hourlyForecast.list[0].main.temp,
            feelsLike0: hourlyForecast.list[0].main.feels_like,
            wind0: hourlyForecast.list[0].wind.speed,
            humidity0: hourlyForecast.list[0].main.humidity,
            pressure0: hourlyForecast.list[0].main.pressure,

            date1: hourlyForecast.list[1].dt_txt,
            icon1: hourlyForecast.list[1].weather[0].icon,
            temp1: hourlyForecast.list[1].main.temp,
            feelsLike1: hourlyForecast.list[1].main.feels_like,
            wind1: hourlyForecast.list[1].wind.speed,
            humidity1: hourlyForecast.list[1].main.humidity,
            pressure1: hourlyForecast.list[1].main.pressure,

            date2: hourlyForecast.list[2].dt_txt,
            icon2: hourlyForecast.list[2].weather[0].icon,
            temp2: hourlyForecast.list[2].main.temp,
            feelsLike2: hourlyForecast.list[2].main.feels_like,
            wind2: hourlyForecast.list[2].wind.speed,
            humidity2: hourlyForecast.list[2].main.humidity,
            pressure2: hourlyForecast.list[2].main.pressure,

            date3: hourlyForecast.list[3].dt_txt,
            icon3: hourlyForecast.list[3].weather[0].icon,
            temp3: hourlyForecast.list[3].main.temp,
            feelsLike3: hourlyForecast.list[3].main.feels_like,
            wind3: hourlyForecast.list[3].wind.speed,
            humidity3: hourlyForecast.list[3].main.humidity,
            pressure3: hourlyForecast.list[3].main.pressure,

            date4: hourlyForecast.list[4].dt_txt,
            icon4: hourlyForecast.list[4].weather[0].icon,
            temp4: hourlyForecast.list[4].main.temp,
            feelsLike4: hourlyForecast.list[4].main.feels_like,
            wind4: hourlyForecast.list[4].wind.speed,
            humidity4: hourlyForecast.list[4].main.humidity,
            pressure4: hourlyForecast.list[4].main.pressure,
        }
    }


}

export default WeatherService;