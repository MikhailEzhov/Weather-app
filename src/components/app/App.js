import AppHeader from '../appHeader/AppHeader';

import CurrentWeatherSearchForm from '../currentWeatherSearchForm/CurrentWeatherSearchForm';
import CurrentWeatherMinimumData from '../currentWeatherMinimumData/CurrentWeatherMinimumData';

import CurrentWeatherMaximumData from '../currentWeatherMaximumData/CurrentWeatherMaximumData';

import DailyForecastSearchForm from '../dailyForecastSearchForm/DailyForecastSearchForm';
import DailyForecastMinimumData from '../dailyForecastMinimumData/DailyForecastMinimumData';

import DailyForecastMaximumData from '../dailyForecastMaximumData/DailyForecastMaximumData';



const App = () => {
    return (
        <div>
            <AppHeader/>
            <CurrentWeatherSearchForm/>
            <CurrentWeatherMinimumData/>
        </div>
    )
}

export default App;
