import React from 'react';
import { render } from '@testing-library/react';
import PixelArt from '../pages/pixelart';

it('renders correctly', () => {
    const component = render(
        <div data-testid="custom-element">
            <PixelArt />
        </div>,
    );
    expect(component.getByTestId('custom-element')).toMatchSnapshot();
});
