import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import StockRoutes from './Components/Pages/rotas';
import { Content } from './styles';
import Home from './Home';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Content>
                <Home />
                {/* <StockRoutes /> */}
            </Content>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
