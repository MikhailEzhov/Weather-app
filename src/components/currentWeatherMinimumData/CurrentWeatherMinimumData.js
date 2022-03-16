import './currentWeatherData.scss';



const CurrentWeatherMinimumData = () => {
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
                            <td className="current-weather__table-item-big">-5°C</td>
                        </tr>
                    </tbody>
                        
                    <tfoot>
                        <tr>
                            <th colSpan="10">
                                <button className="current-weather__table-button">detail</button>
                            </th>
                        </tr>
                    </tfoot>
                </table>

            </div>
        </section>
    )
}

export default CurrentWeatherMinimumData;