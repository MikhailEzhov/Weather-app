import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; // для маршрутизации, чтобы перенаправлять

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useWeatherService from '../../services/WeatherService'; // подключили кастомный хук, с трансформированными данными от API

import './hourlyForecastData.scss';



const HourlyForecastMinimumData = () => {


    // подключаем сущьности из кастомного хука useWeatherService:
    const {loading, error, clearError, getHourlyForecastByCity} = useWeatherService();


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
        getHourlyForecastByCity(cityX)       // запускаем метод для получения почасового прогноза по городу
            .then(onCityLoaded)    // при положительном ответе (запустится это)
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
        date1,
        date2,
        date3,
        date4,
        temp0,
        temp1,
        temp2,
        temp3,
        temp4,
    } = city; // диструктуризация

    return (
        <table className="hourly-forecast__table">
            <thead>
                <tr>
                    <th colSpan="10" className="hourly-forecast__table-title">Hourly forecast in the default city</th>
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
                    <td className="hourly-forecast__table-item">Temp</td>
                    <td className="hourly-forecast__table-item-big">{temp0}°C</td>
                    <td className="hourly-forecast__table-item-big">{temp1}°C</td>
                    <td className="hourly-forecast__table-item-big">{temp2}°C</td>
                    <td className="hourly-forecast__table-item-big">{temp3}°C</td>
                    <td className="hourly-forecast__table-item-big">{temp4}°C</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <th colSpan="10">
                        <Link to={`/hourly-forecast-detailed/${name}`} className="hourly-forecast__table-button">detail</Link>
                    </th>
                </tr>
            </tfoot>
        </table>
    )
}


export default HourlyForecastMinimumData;



