import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; // для маршрутизации, чтобы перенаправлять

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useWeatherService from '../../services/WeatherService'; // подключили кастомный хук, с трансформированными данными от API

import './currentWeatherData.scss';



const CurrentWeatherMinimumData = () => {


    // подключаем сущьности из кастомного хука useWeatherService:
    const {loading, error, clearError, getCurrentWeatherByCity} = useWeatherService();


    // состояния:
    const [city, setCity] = useState(null);


    // эффект:
    useEffect(() => {
        updateCity();            // обновление
    }, [])                       // выполнится только один раз, нет слежения за состояниями


    // обновление города:
    const updateCity = () => {
        clearError();                        // очищаем ошибки, если они возникли когда данных с сервера не было
        const cityX = 'Perm';   
        getCurrentWeatherByCity(cityX)       // запускаем метод для получения текущей погоды по городу
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
    const content = !(loading || error  || !city) ? <View city={city}/> : null; // content = когда нет ошибки, и уже нет загрузки: или компонент View, или nul


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
    const {name, country, temp} = city; // диструктуризация

    return (
        <table className="current-weather__table">
            <thead>
                <tr>
                    <th colSpan="10" className="current-weather__table-title">Current weather in the default city</th>
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
                        <Link to={`/current-weather-detailed/${name}`} className="current-weather__table-button">detail</Link>
                    </th>
                </tr>
            </tfoot>
        </table>
    )
}


export default CurrentWeatherMinimumData;