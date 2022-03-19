import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // для маршрутизации

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useWeatherService from '../../services/WeatherService'; // подключили кастомный хук, с трансформированными данными от API

import '../currentWeatherMinimumData/currentWeatherData.scss';



const CurrentWeatherMaximumData = () => {


    // путь, из хука маршрутизации:
    const {cityNameCW} = useParams(); // для динамического пути, в App.js создали путь path="/current-weather-detailed/:cityNameCW" , и тут cityNameCW вытаскиваем


    // подключаем сущьности из кастомного хука useWeatherService:
    const {loading, error, clearError, getCurrentWeatherByCity} = useWeatherService();


    // состояния:
    const [city, setCity] = useState(null);


    // эффект:
    useEffect(() => {
        updateCity();            // обновление
    }, [cityNameCW])             // выполнится первый раз после рендаринга компонента, затем будет обновляться при изменении состояния


    // обновление города:
    const updateCity = () => {
        clearError();                        // очищаем ошибки, если они возникли когда данных с сервера не было  
        getCurrentWeatherByCity(cityNameCW)  // запускаем метод для получения текущей погоды по городу
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
        <section className="current-weather">
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
    const {name, country, icon, description, temp, feelsLike, wind, humidity, pressure} = city; // диструктуризация

    return (
        <table className="current-weather__table">
            <thead>
                <tr>
                    <th colSpan="10" className="current-weather__table-title">Сurrent weather in</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="current-weather__table-title">{name}, {country}</td>
                    <td colSpan="2" rowSpan="2" className="current-weather__table-item">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon}/>
                    </td>
                </tr>
                <tr>
                    <td className="current-weather__table-item">{description}</td>
                </tr>
                <tr>
                    <td rowSpan="4" className="current-weather__table-item-big">{temp}°C</td>
                    <td className="current-weather__table-item">Feels like</td>
                    <td className="current-weather__table-item">{feelsLike}°C</td>
                </tr>
                <tr>
                    <td className="current-weather__table-item">Wind</td>
                    <td className="current-weather__table-item">{wind} m/s</td>
                </tr>
                <tr>
                    <td className="current-weather__table-item">Humidity</td>
                    <td className="current-weather__table-item">{humidity}%</td>
                </tr>
                <tr>
                    <td className="current-weather__table-item">Pressure</td>
                    <td className="current-weather__table-item">{pressure} hPa</td>
                </tr>
            </tbody>

        </table>
    )
}

export default CurrentWeatherMaximumData;