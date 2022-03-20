import { Helmet, HelmetProvider } from "react-helmet-async"; // для SEO оптимизации

import CurrentWeatherSearchForm from '../currentWeatherSearchForm/CurrentWeatherSearchForm';
import CurrentWeatherMinimumData from '../currentWeatherMinimumData/CurrentWeatherMinimumData';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';



const PageMain = () => {
    return (
        <>
            <HelmetProvider>
                    <Helmet>
                        <title>Сurrent weather</title>
                        <meta name="description" content="Page with current weather"/>
                        <meta name="keywords" content="сurrent, weather"/>
                    </Helmet>

                    <ErrorBoundary>
                        <CurrentWeatherSearchForm/>
                    </ErrorBoundary>

                    <ErrorBoundary>
                        <CurrentWeatherMinimumData/>
                    </ErrorBoundary>
            </HelmetProvider>
        </>
    )
}

export default PageMain;