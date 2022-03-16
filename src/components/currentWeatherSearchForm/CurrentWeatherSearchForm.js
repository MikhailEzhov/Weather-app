import './currentWeatherSearchForm.scss';



const CurrentWeatherSearchForm = () => {
    return (
        <section className="current-weather-search">
            <div className="container">

                <form>
                    <label className="current-weather-search__label" htmlFor="currentCity">Find out the current weather in the city:</label>
                    <div className="current-weather-search__wrapper">
                        <input
                            className="current-weather-search__input"
                            id="currentCity" 
                            name='currentCity' 
                            type='text' 
                            placeholder="Enter city"
                        />
                        <button 
                            type='submit' 
                            className="current-weather-search__button">
                            <div className="current-weather-search__button-title">find</div>
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default CurrentWeatherSearchForm;