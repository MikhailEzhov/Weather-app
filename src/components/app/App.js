import AppHeader from '../appHeader/AppHeader';

import CurrentWeatherSearchForm from '../currentWeatherSearchForm/CurrentWeatherSearchForm';
import CurrentWeatherMinimumData from '../currentWeatherMinimumData/CurrentWeatherMinimumData';

import CurrentWeatherMaximumData from '../currentWeatherMaximumData/CurrentWeatherMaximumData';

import HourlyForecastMinimumData from '../hourlyForecastMinimumData/HourlyForecastMinimumData';
import HourlyForecastMaximumData from '../hourlyForecastMaximumData/HourlyForecastMaximumData';

import HourlyForecastSearchForm from '../hourlyForecastSearchForm/HourlyForecastSearchForm';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const App = () => {
    return (
        <div>
            <AppHeader/>

            <main>

                <ErrorBoundary>
                    <HourlyForecastMinimumData/>
                </ErrorBoundary>

                <ErrorBoundary>
                    <HourlyForecastMaximumData/>
                </ErrorBoundary>

            </main>

        </div>
    )
}

export default App;
