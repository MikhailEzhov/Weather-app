import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"; // подключили компоненты из пакета для маршрутизации

import {
    PageMain, 
    PageHourlyForecast,
    Page404,
    PageCurrentWeatherDetailed,
    PageHourlyForecastDetailed,
} from '../pages'; // подключаем страницы

import AppHeader from '../appHeader/AppHeader';



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


                        <Route exact path="/current-weather-detailed/:cityNameCW">
                            <PageCurrentWeatherDetailed/>
                        </Route>


                        <Route exact path="/hourly-forecast">
                            <PageHourlyForecast/>
                        </Route>


                        <Route exact path="/hourly-forecast-detailed/:cityNameHF">
                            <PageHourlyForecastDetailed/>
                        </Route>


                        <Route path="*">
                            <Page404/>
                        </Route>


                    </Switch>
                </main>

            </div>
        </Router>
    )
}

export default App;
