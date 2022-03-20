import { Helmet, HelmetProvider } from "react-helmet-async"; // для SEO оптимизации

import HourlyForecastMaximumData from '../hourlyForecastMaximumData/HourlyForecastMaximumData';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const PageHourlyForecastDetailed = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Hourly weather forecast in detail</title>
                    <meta name="description" content="Page with detailed hourly weather forecast"/>
                    <meta name="keywords" content="hourly, weather, forecast, detail"/>
                </Helmet>

                <ErrorBoundary>
                    <HourlyForecastMaximumData/>
                </ErrorBoundary>
            </HelmetProvider>
        </>
    )
}

export default PageHourlyForecastDetailed;