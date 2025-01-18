import React from 'react'
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import MainLayout from '../layout';
import Home from '../pages/Home';


export const Routes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/', element: <Home /> }
            ]
        }
    ]);

    return routes;
}

export default Routes;
