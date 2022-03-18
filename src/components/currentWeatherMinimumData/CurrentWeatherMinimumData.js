import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import WeatherService from '../../services/WeatherService'; // подключили сетевую-сервисную часть

import './currentWeatherData.scss';



const CurrentWeatherMinimumData = () => {


    // состояния:
    const [currentWeather, setCurrentWeather] = useState(null);   // текущая погода
    const [loading, setLoading] = useState(true);                 // загрузка
    const [error, setError] = useState(false);                    // ошибка


    // переменная weatherService = создаёт экземпляр от класса:
    const weatherService = new WeatherService();


    // эффект:
    useEffect(() => {
        updateCurrentWeather();            // обновление
    }, [])                                 // выполнится только один раз, нет слежения за состояниями


    // когда текущая погода загрузилась:
    const onCurrentWeatherLoaded = (currentWeather) => {
        // меняем состояния:
        setLoading(false);
        setCurrentWeather(currentWeather);
    }


    // когда текущая погода загружается:
    const onCurrentWeatherLoading = () => {
        // меняем состояния:
        setLoading(true);
    }


    // когда ошибка:
    const onError = () => {
        // меняем состояния:
        setError(error => true);
        setLoading(loading => false);
    }


    // обновление текущей погоды:
    const updateCurrentWeather = () => {
        const city = 'Perm';   
        onCurrentWeatherLoading();           // loading изменится на true
        weatherService                       // обращаемся к weatherService
            .getCurrentWeatherByCity(city)   // запускаем метод для получения текущей погоды по городу
            .then(onCurrentWeatherLoaded)    // при положительном ответе (запустится это)
            .catch(onError);                 // при ошибке (запустится это)
    }


    const errorMessage = error ? <ErrorMessage/> : null; // errorMessage = или компонент с ошибкой, или null
    const spinner = loading ? <Spinner/> : null; // spinner = или компонент с загрузкой, или null
    // контент помещается на страницу, когда нет ошибки, и уже нет загрузки:
    const content = !(loading || error  || !currentWeather) ? <View currentWeather={currentWeather}/> : null; // content = когда нет ошибки, и уже нет загрузки: или компонент View, или null


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
const View = ({currentWeather}) => { // принимает в себя объект с текущей погодой
    const {name, country, icon, description, temp, feelsLike, wind, humidity, pressure} = currentWeather;

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
                </tr>
                <tr>
                    <td className="current-weather__table-item-big">{temp}°C</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <th colSpan="10">
                        <button className="current-weather__table-button">detail</button>
                    </th>
                </tr>
            </tfoot>
        </table>
    )
}


export default CurrentWeatherMinimumData;