import HourlyForecastSearchForm from '../hourlyForecastSearchForm/HourlyForecastSearchForm';
import HourlyForecastMinimumData from '../hourlyForecastMinimumData/HourlyForecastMinimumData';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const PageHourlyForecast = () => {
    return (
        <>
            <ErrorBoundary>
                <HourlyForecastSearchForm/>
            </ErrorBoundary>
            <ErrorBoundary>
                <HourlyForecastMinimumData/>
            </ErrorBoundary>
        </>
    )
}

export default PageHourlyForecast;