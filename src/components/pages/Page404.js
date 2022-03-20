import { Helmet, HelmetProvider } from "react-helmet-async"; // для SEO оптимизации

import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom"; // для маршрутизации, чтобы перенаправлять назад



const Page404 = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Error 404</title>
                    <meta name="description" content="404 error page"/>
                    <meta name="keywords" content="404, error"/>
                </Helmet>


                <ErrorMessage/>

                <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>

                <Link 
                    style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} 
                    to="/">
                        Back to main page
                </Link>
            </HelmetProvider>
        </div>
    )
}

export default Page404;