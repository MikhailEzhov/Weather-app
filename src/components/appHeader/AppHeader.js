import './appHeader.scss';



const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">Weather</h1>

                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__link">Current Weather</li>
                        <li className="header__link">Daily Forecast 7 days</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;