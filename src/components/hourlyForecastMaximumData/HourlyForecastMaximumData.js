import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // для маршрутизации

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useWeatherService from '../../services/WeatherService'; // подключили кастомный хук, с трансформированными данными от API

import '../hourlyForecastMinimumData/hourlyForecastData.scss';



const HourlyForecastMaximumData = () => {


    // путь, из хука маршрутизации:
    const {cityNameHF} = useParams(); // для динамического пути, в App.js создали путь path="/current-weather-detailed/:cityNameHF" , и тут cityNameHF вытаскиваем


    // подключаем сущьности из кастомного хука useWeatherService:
    const {loading, error, clearError, getHourlyForecastByCity} = useWeatherService();


    // состояния:
    const [city, setCity] = useState(null);


    // эффект:
    useEffect(() => {
        updateCity();            // обновление
    }, [cityNameHF])             // выполнится первый раз после рендаринга компонента, затем будет обновляться при изменении состояния


    // обновление города:
    const updateCity = () => {
        clearError();                        // очищаем ошибки, если они возникли когда данных с сервера не было
        getHourlyForecastByCity(cityNameHF)  // запускаем метод для получения почасового прогноза по городу
            .then(onCityLoaded)              // при положительном ответе (запустится это)
    }


    // когда город загрузился:
    const onCityLoaded = (city) => {
        // меняем состояния:
        setCity(city);
    }


    const errorMessage = error ? <ErrorMessage/> : null; // errorMessage = или компонент с ошибкой, или null
    const spinner = loading ? <Spinner/> : null; // spinner = или компонент с загрузкой, или null
    // контент помещается на страницу, когда нет ошибки, и уже нет загрузки:
    const content = !(loading || error  || !city) ? <View city={city}/> : null; // content = когда нет ошибки, и уже нет загрузки: или компонент View, или null


    return (
        <section className="hourly-forecast">
            <div className="container">
                {errorMessage}
                {spinner}
                {content}
            </div>
        </section>
    )
}



// Компонент View - отображает на странице(рендарит):
const View = ({city}) => { // принимает в себя объект
    const {name, 
        country, 
        date0,
        icon0,
        temp0,
        feelsLike0,
        wind0,
        humidity0,
        pressure0,
        date1,
        icon1,
        temp1,
        feelsLike1,
        wind1,
        humidity1,
        pressure1,
        date2,
        icon2,
        temp2,
        feelsLike2,
        wind2,
        humidity2,
        pressure2,
        date3,
        icon3,
        temp3,
        feelsLike3,
        wind3,
        humidity3,
        pressure3,
        date4,
        icon4,
        temp4,
        feelsLike4,
        wind4,
        humidity4,
        pressure4,
    } = city; // диструктуризация


    return (
        <table className="hourly-forecast__table">
            <thead>
                <tr>
                    <th colSpan="10" className="hourly-forecast__table-title">Hourly forecast in</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td colSpan="10" className="hourly-forecast__table-title">{name}, {country}</td>
                </tr>
                <tr>
                    <td className="hourly-forecast__table-item">Date</td>
                    <td className="hourly-forecast__table-item">{date0}</td>
                    <td className="hourly-forecast__table-item">{date1}</td>
                    <td className="hourly-forecast__table-item">{date2}</td>
                    <td className="hourly-forecast__table-item">{date3}</td>
                    <td className="hourly-forecast__table-item">{date4}</td>
                </tr>
                <tr>
                    <td className="hourly-forecast__table-item">Icon</td>
                    <td className="hourly-forecast__table-item">
                        <img className="hourly-forecast__table-item-picture" src={`http://openweathermap.org/img/wn/${icon0}@2x.png`} alt={icon0}/>
                    </td>
                    <td className="hourly-forecast__table-item">
                        <img className="hourly-forecast__table-item-picture"  src={`http://openweathermap.org/img/wn/${icon1}@2x.png`} alt={icon1}/>
                    </td>
                    <td className="hourly-forecast__table-item">
                        <img className="hourly-forecast__table-item-picture"  src={`http://openweathermap.org/img/wn/${icon2}@2x.png`} alt={icon2}/>
                    </td>
                    <td className="hourly-forecast__table-item">
                        <img className="hourly-forecast__table-item-picture"  src={`http://openweathermap.org/img/wn/${icon3}@2x.png`} alt={icon3}/>
                    </td>
                    <td className="hourly-forecast__table-item">
                        <img className="hourly-forecast__table-item-picture"  src={`http://openweathermap.org/img/wn/${icon4}@2x.png`} alt={icon4}/>
                    </td>
                </tr>
                <tr>
                    <td className="hourly-forecast__table-item">Temp</td>
                    <td className="hourly-forecast__table-item">{temp0}°C</td>
                    <td className="hourly-forecast__table-item">{temp1}°C</td>
                    <td className="hourly-forecast__table-item">{temp2}°C</td>
                    <td className="hourly-forecast__table-item">{temp3}°C</td>
                    <td className="hourly-forecast__table-item">{temp4}°C</td>
                </tr>
                <tr>
                    <td className="hourly-forecast__table-item">Feels like</td>
                    <td className="hourly-forecast__table-item">{feelsLike0}°C</td>
                    <td className="hourly-forecast__table-item">{feelsLike1}°C</td>
                    <td className="hourly-forecast__table-item">{feelsLike2}°C</td>
                    <td className="hourly-forecast__table-item">{feelsLike3}°C</td>
                    <td className="hourly-forecast__table-item">{feelsLike4}°C</td>
                </tr>
                <tr>
                    <td className="hourly-forecast__table-item">Wind</td>
                    <td className="hourly-forecast__table-item">{wind0} m/s</td>
                    <td className="hourly-forecast__table-item">{wind1} m/s</td>
                    <td className="hourly-forecast__table-item">{wind2} m/s</td>
                    <td className="hourly-forecast__table-item">{wind3} m/s</td>
                    <td className="hourly-forecast__table-item">{wind4} m/s</td>
                </tr>
                <tr>
                    <td className="hourly-forecast__table-item">Humidity</td>
                    <td className="hourly-forecast__table-item">{humidity0} %</td>
                    <td className="hourly-forecast__table-item">{humidity1} %</td>
                    <td className="hourly-forecast__table-item">{humidity2} %</td>
                    <td className="hourly-forecast__table-item">{humidity3} %</td>
                    <td className="hourly-forecast__table-item">{humidity4} %</td>
                </tr>
                <tr>
                    <td className="hourly-forecast__table-item">Pressure</td>
                    <td className="hourly-forecast__table-item">{pressure0} hPa</td>
                    <td className="hourly-forecast__table-item">{pressure1} hPa</td>
                    <td className="hourly-forecast__table-item">{pressure2} hPa</td>
                    <td className="hourly-forecast__table-item">{pressure3} hPa</td>
                    <td className="hourly-forecast__table-item">{pressure4} hPa</td>
                </tr>
            </tbody>
        </table>
    )
}


export default HourlyForecastMaximumData;