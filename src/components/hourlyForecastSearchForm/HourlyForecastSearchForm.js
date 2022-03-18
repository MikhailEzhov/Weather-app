import './hourlyForecastSearchForm.scss';



const HourlyForecastSearchForm = () => {
    return (
        <section className="hourly-forecast-search">
            <div className="container">

                <form>
                    <label className="hourly-forecast-search__label" htmlFor="hourlySearch">Find out the hourly forecast in the city:</label>
                    <div className="hourly-forecast-search__wrapper">
                        <input
                            className="hourly-forecast-search__input"
                            id="hourlySearch" 
                            name='hourlySearch' 
                            type='text' 
                            placeholder="Enter city"
                        />
                        <button 
                            type='submit' 
                            className="hourly-forecast-search__button">
                            <div className="hourly-forecast-search__button-title">find</div>
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default HourlyForecastSearchForm;