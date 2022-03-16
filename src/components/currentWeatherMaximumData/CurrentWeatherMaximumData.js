import '../currentWeatherMinimumData/currentWeatherData.scss';



const CurrentWeatherMaximumData = () => {
    return (
        <section className="current-weather">
            <div className="container">

                <table className="current-weather__table">
                    <thead>
                        <tr>
                            <th colSpan="10" className="current-weather__table-title">London</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="current-weather__table-item">Feels like</td>
                            <td className="current-weather__table-item">-5°C</td>
                        </tr>
                        <tr>
                            <td className="current-weather__table-item">Wind</td>
                            <td className="current-weather__table-item">4.1 m/s</td>
                        </tr>
                        <tr>
                            <td className="current-weather__table-item">Humidity</td>
                            <td className="current-weather__table-item">57%</td>
                        </tr>
                        <tr>
                            <td className="current-weather__table-item">Pressure</td>
                            <td className="current-weather__table-item">1021 hPa</td>
                        </tr>
                    </tbody>
                        
                </table>

            </div>
        </section>
    )
}

export default CurrentWeatherMaximumData;