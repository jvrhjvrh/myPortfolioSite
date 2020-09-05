import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import Sider from '../layout/Sider';
import Routes from '../routes/Routes';

const PropChildren = () => (
    <div> teste </div>
);

it('render correctly', () => {
    const component = render(
        <div data-testid="custom-element">
            <BrowserRouter>
                <Sider><PropChildren /></Sider>
            </BrowserRouter>
        </div>,
    );
    expect(component.getByTestId('custom-element')).toMatchSnapshot();
});

it('collapses correctly', () => {
    const component = render(
        <BrowserRouter>
            <Sider><PropChildren /></Sider>
        </BrowserRouter>,
    );
    const button = component.getByLabelText('left');
    fireEvent.click(button);
    component.getByLabelText('right');
});

it('changes to brainfuck page', () => {
    const history = createMemoryHistory();
    const component = render(
        <Router history={history}>
            <Sider>
                <Routes />
            </Sider>
        </Router>,
    );

    component.getByTestId('home-page');

    const button = component.getByText('Brainfuck.js');

    fireEvent.click(button);

    component.getByTestId('brainfuck-page');
});

it('changes to brainfuck page and back to home', () => {
    const history = createMemoryHistory();
    const component = render(
        <Router history={history}>
            <Sider>
                <Routes />
            </Sider>
        </Router>,
    );

    component.getByTestId('home-page');

    const button = component.getByText('Brainfuck.js');

    fireEvent.click(button);

    component.getByTestId('brainfuck-page');

    const homeButton = component.getByText('home.js');

    fireEvent.click(homeButton);

    component.getByTestId('home-page');
});

it('changes to pixelart page', () => {
    const history = createMemoryHistory();
    const component = render(
        <Router history={history}>
            <Sider>
                <Routes />
            </Sider>
        </Router>,
    );

    component.getByTestId('home-page');

    const button = component.getByText('Pixelart.js');

    fireEvent.click(button);

    component.getByTestId('pixelart-page');
});
