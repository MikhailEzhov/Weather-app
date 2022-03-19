import CurrentWeatherMaximumData from '../currentWeatherMaximumData/CurrentWeatherMaximumData';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const PageCurrentWeatherDetailed = () => {
    return (
        <>
            <ErrorBoundary>
                <CurrentWeatherMaximumData/>
            </ErrorBoundary>
        </>
    )
}

export default PageCurrentWeatherDetailed;