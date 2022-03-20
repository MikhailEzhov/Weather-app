import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik'; // компоненты для формы
import * as Yup from 'yup'; // валидация
import {Link} from 'react-router-dom'; // для маршрутизации, чтобы перенаправлять

import useWeatherService from '../../services/WeatherService'; // подключили кастомный хук, с трансформированными данными от API

import './searchForm.scss';



const CurrentWeatherSearchForm = () => {


    // подключаем сущьности из кастомного хука useWeatherService:
    const {loading, error, clearError, getCurrentWeatherByCity} = useWeatherService();


    // состояния:
    const [city, setCity] = useState(null);


    // обновление города:
    const updateCity = (cityName) => {
        clearError();                       // очищаем ошибки, если они возникли когда данных с сервера не было
        getCurrentWeatherByCity(cityName)   // запускаем метод для получения текущей погоды по городу
            .then(onCityLoaded)             // при положительном ответе (запустится это)
    }


    // когда город загрузился:
    const onCityLoaded = (city) => {
        // меняем состояния:
        setCity(city);
    }


    const errorMessage = error ? <p>City not found. Check the name and try again.</p> : null;
    const results = !city ? 
                        null
                        :
                        <Link to={`/current-weather-detailed/${city.name}`} className="search-form__link">
                            {city.name}
                        </Link>



    return (
        <section className="search-form">
            <div className="container">

                <Formik
                    initialValues = {{
                        cityName: ''
                    }}
                    validationSchema = {Yup.object({
                        cityName: Yup.string().required('This field is required')
                    })}
                    onSubmit = { ({cityName}) => {
                        updateCity(cityName);
                    }}
                >
                    <Form>
                        <label className="search-form__label" htmlFor="cityName">Find out the current weather in the city:</label>
                        <div className="search-form__wrapper">
                            <Field
                                className="search-form__input"
                                id="cityName" 
                                name='cityName' 
                                type='text' 
                                placeholder="Enter city"/>
                            <button 
                                type='submit' 
                                className="search-form__button"
                                disabled={loading}>
                                <div className="search-form__button-title">find</div>
                            </button>
                        </div>
                        <FormikErrorMessage component="div" className="search-form__error" name="cityName" />
                    </Form>
                </Formik>

                {results}
                {errorMessage}

            </div>
        </section>
    )
}

export default CurrentWeatherSearchForm;