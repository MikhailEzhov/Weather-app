import './dailyForecastSearchForm.scss';



const DailyForecastSearchForm = () => {
    return (
        <section className="daily-forecast-search">
            <div className="container">

                <form>
                    <label className="daily-forecast-search__label" htmlFor="currentCity">Find out the daily forecast for the city:</label>
                    <div className="daily-forecast-search__wrapper">
                        <input
                            className="daily-forecast-search__input"
                            id="currentCity" 
                            name='currentCity' 
                            type='text' 
                            placeholder="Enter city"
                        />
                        <button 
                            type='submit' 
                            className="daily-forecast-search__button">
                            <div className="daily-forecast-search__button-title">find</div>
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default DailyForecastSearchForm;