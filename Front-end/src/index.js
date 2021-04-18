import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import StockRoutes from './Components/Pages/rotas';
import { Content } from './styles';
import ProductForm from './Components/Common/ProductForm';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Content>
                {/* <ProductForm /> */}
                <StockRoutes />
            </Content>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
