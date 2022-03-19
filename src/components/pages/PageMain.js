import CurrentWeatherSearchForm from '../currentWeatherSearchForm/CurrentWeatherSearchForm';
import CurrentWeatherMinimumData from '../currentWeatherMinimumData/CurrentWeatherMinimumData';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const PageMain = () => {
    return (
        <>
            <ErrorBoundary>
                <CurrentWeatherSearchForm/>
            </ErrorBoundary>
            <ErrorBoundary>
                <CurrentWeatherMinimumData/>
            </ErrorBoundary>
        </>
    )
}

export default PageMain;