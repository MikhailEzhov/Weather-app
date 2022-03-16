import '../dailyForecastMinimumData/dailyForecastData.scss';



const DailyForecastMaximumData = () => {
    return (
        <section className="daily-forecast">
            <div className="container">

                <table className="daily-forecast__table">
                    <thead>
                        <tr>
                            <th colSpan="7" className="daily-forecast__table-title">London</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="daily-forecast__table-item">Date</td>
                            <td className="daily-forecast__table-item">21 Mar</td>
                            <td className="daily-forecast__table-item">1 Mar</td>
                            <td className="daily-forecast__table-item">35 Mar</td>
                            <td className="daily-forecast__table-item">Today</td>
                            <td className="daily-forecast__table-item">1 Mar</td>
                        </tr>
                        <tr>
                            <td className="daily-forecast__table-item">Feels like</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                        </tr>
                        <tr>
                            <td className="daily-forecast__table-item">Wind</td>
                            <td className="daily-forecast__table-item">4.1 m/s</td>
                            <td className="daily-forecast__table-item">4.1 m/s</td>
                            <td className="daily-forecast__table-item">4.1 m/s</td>
                            <td className="daily-forecast__table-item">4.1 m/s</td>
                            <td className="daily-forecast__table-item">4.1 m/s</td>
                        </tr>
                        <tr>
                            <td className="daily-forecast__table-item">Humidity</td>
                            <td className="daily-forecast__table-item">57%</td>
                            <td className="daily-forecast__table-item">57%</td>
                            <td className="daily-forecast__table-item">57%</td>
                            <td className="daily-forecast__table-item">57%</td>
                            <td className="daily-forecast__table-item">57%</td>
                        </tr>
                        <tr>
                            <td className="daily-forecast__table-item">Pressure</td>
                            <td className="daily-forecast__table-item">1021 hPa</td>
                            <td className="daily-forecast__table-item">1021 hPa</td>
                            <td className="daily-forecast__table-item">1021 hPa</td>
                            <td className="daily-forecast__table-item">1021 hPa</td>
                            <td className="daily-forecast__table-item">1021 hPa</td>
                        </tr>
                    </tbody>
                        
                </table>

            </div>
        </section>
    )
}

export default DailyForecastMaximumData;