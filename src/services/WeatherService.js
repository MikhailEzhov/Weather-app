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
        console.log(res)
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



    // получить ежедневный прогноз по городу
    // getDailyForecastByCity = async (city = 'London') => {
    //     const res = await this.getResource(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=9c28f87f8cae1531b8dab5b2f429f827`); 
    //     return this._transformData(res.data[0]); // массив с объектами
    // }



}

export default WeatherService;