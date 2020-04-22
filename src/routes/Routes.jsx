import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../pages/home';
import Brainfuck from '../pages/brainfuck';
import Pixelart from '../pages/pixelart';

export default () => (
    <Switch>
        <Route path="/brainfuck" component={Brainfuck} />
        <Route path="/pixelart" component={Pixelart} />
        <Route path="/" component={Home} />
    </Switch>
);
