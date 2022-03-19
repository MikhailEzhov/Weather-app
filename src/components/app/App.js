import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"; // подключили компоненты из пакета для маршрутизации

import AppHeader from '../appHeader/AppHeader';
import {PageMain, PageHourlyForecast} from '../pages'; // подключаем страницы

import CurrentWeatherMaximumData from '../currentWeatherMaximumData/CurrentWeatherMaximumData';

import HourlyForecastMaximumData from '../hourlyForecastMaximumData/HourlyForecastMaximumData';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const App = () => {
    return (
        <Router>
            <div>
                <AppHeader/>

                <main>
                    <Switch>
                        <Route exact path="/">
                            <PageMain/>
                        </Route>

                        <Route exact path="/current-weather-detailed">
                            <ErrorBoundary>
                                <CurrentWeatherMaximumData/>
                            </ErrorBoundary>
                        </Route>

                        <Route exact path="/hourly-forecast">
                            <PageHourlyForecast/>
                        </Route>

                        <Route exact path="/hourly-forecast-detailed">
                            <ErrorBoundary>
                                <HourlyForecastMaximumData/>
                            </ErrorBoundary>
                        </Route>
                    </Switch>
                </main>

            </div>
        </Router>
    )
}

export default App;
