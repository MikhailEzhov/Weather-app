import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"; // подключили компоненты из пакета для маршрутизации

import { lazy } from "react";        // для ленивой(динамической) загрузки
import { Suspense } from "react";    // работает с ошибками при ленивой(динамической) загрузке, отображает запасное содержимое 

// import {
//     PageMain, 
//     PageHourlyForecast,
//     Page404,
//     PageCurrentWeatherDetailed,
//     PageHourlyForecastDetailed,
// } from '../pages'; // обычное подключение страниц

import Spinner from "../spinner/Spinner";
import AppHeader from '../appHeader/AppHeader';

// динамические импорты должны быть всегда ниже обычных импортов:
const PageMain = lazy(() => import("../pages/PageMain"));                                        // загружается лениво(динамически)
const PageHourlyForecast = lazy(() => import("../pages/PageHourlyForecast"));                    // загружается лениво(динамически)
const Page404 = lazy(() => import("../pages/Page404"));                                          // загружается лениво(динамически)
const PageCurrentWeatherDetailed = lazy(() => import("../pages/PageCurrentWeatherDetailed"));    // загружается лениво(динамически)
const PageHourlyForecastDetailed = lazy(() => import("../pages/PageHourlyForecastDetailed"));    // загружается лениво(динамически)



const App = () => {
    return (
        <Router>
            <div>
                <AppHeader/>

                <main>
                    <Suspense fallback={<Spinner/>}>
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
                    </Suspense>
                </main>

            </div>
        </Router>
    )
}

export default App;
