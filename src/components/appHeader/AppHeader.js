import './appHeader.scss';



const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">Weather</h1>

                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__link">Current weather</li>
                        <li className="header__link">Hourly forecast</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;