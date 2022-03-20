import { Helmet, HelmetProvider } from "react-helmet-async"; // для SEO оптимизации

import HourlyForecastSearchForm from '../hourlyForecastSearchForm/HourlyForecastSearchForm';
import HourlyForecastMinimumData from '../hourlyForecastMinimumData/HourlyForecastMinimumData';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const PageHourlyForecast = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Hourly weather forecast</title>
                    <meta name="description" content="Page with hourly weather forecast"/>
                    <meta name="keywords" content="hourly, weather, forecast"/>
                </Helmet>

                <ErrorBoundary>
                    <HourlyForecastSearchForm/>
                </ErrorBoundary>

                <ErrorBoundary>
                    <HourlyForecastMinimumData/>
                </ErrorBoundary>
            </HelmetProvider>
        </>
    )
}

export default PageHourlyForecast;