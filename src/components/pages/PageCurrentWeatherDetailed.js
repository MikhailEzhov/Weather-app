import { Helmet, HelmetProvider } from "react-helmet-async"; // для SEO оптимизации

import CurrentWeatherMaximumData from '../currentWeatherMaximumData/CurrentWeatherMaximumData';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const PageCurrentWeatherDetailed = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Current weather in detail</title>
                    <meta name="description" content="Page with detailed current weather"/>
                    <meta name="keywords" content="current, weather, detail"/>
                </Helmet>

                <ErrorBoundary>
                    <CurrentWeatherMaximumData/>
                </ErrorBoundary>
            </HelmetProvider>
        </>
    )
}

export default PageCurrentWeatherDetailed;