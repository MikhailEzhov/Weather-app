import './dailyForecastData.scss';



const DailyForecastMinimumData = () => {
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
                            <td className="daily-forecast__table-item">1 Mar</td>
                            <td className="daily-forecast__table-item">21 Mar</td>
                            <td className="daily-forecast__table-item">1 Mar</td>
                            <td className="daily-forecast__table-item">35 Mar</td>
                            <td className="daily-forecast__table-item">Today</td>
                            <td className="daily-forecast__table-item">1 Mar</td>
                            <td className="daily-forecast__table-item">55 Mar</td>
                        </tr>
                        <tr>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                            <td className="daily-forecast__table-item">284.07°C</td>
                        </tr>
                    </tbody>
                        
                    <tfoot>
                        <tr>
                            <th colSpan="7">
                                <button className="daily-forecast__table-button">detail</button>
                            </th>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </section>
    )
}

export default DailyForecastMinimumData;