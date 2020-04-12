import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../pages/home';
import Brainfuck from '../pages/brainfuck';

export default () => (
    <Switch>
        <Route path="/brainfuck" component={Brainfuck} />
        <Route path="/" component={Home} />
    </Switch>
);
