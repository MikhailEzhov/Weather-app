import HourlyForecastMaximumData from '../hourlyForecastMaximumData/HourlyForecastMaximumData';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const PageHourlyForecastDetailed = () => {
    return (
        <>
            <ErrorBoundary>
                <HourlyForecastMaximumData/>
            </ErrorBoundary>
        </>
    )
}

export default PageHourlyForecastDetailed;