import { Link, NavLink } from "react-router-dom"; // подключили компоненты из пакета для маршрутизации

import './appHeader.scss';



const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">
                    <Link to="/">
                        Weather
                    </Link>
                </h1>

                <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__link">
                            <NavLink exact to="/" activeStyle={{'color': '#febd39'}}>Current weather</NavLink>
                        </li> 
                        <li className="header__link">
                            <NavLink exact to="/hourly-forecast" activeStyle={{'color': '#febd39'}}>Hourly forecast</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;