import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sider from './layout/Sider';
import Routes from './routes/Routes';

import './App.css';

function App() {
    return (
        <BrowserRouter basename="/myPortfolioSite">
            <Sider>
                <Routes />
            </Sider>
        </BrowserRouter>
    );
}

export default App;
