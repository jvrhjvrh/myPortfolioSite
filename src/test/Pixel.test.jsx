import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pixel from '../pages/pixelart/pixel';

test('pixel should call function with mouseDown', () => {
    const mockCallback = jest.fn((x) => x);
    const component = render(
        <Pixel
            testid="custom-element"
            index={1}
            onMouseDown={mockCallback}
        />,
    );
    const pixel = component.getByTestId('custom-element');
    fireEvent.mouseDown(pixel);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
});

test('pixel should call function with hover', () => {
    const mockCallback = jest.fn((x) => x);
    const component = render(
        <Pixel
            testid="custom-element"
            index={1}
            onHover={mockCallback}
        />,
    );
    const pixel = component.getByTestId('custom-element');
    fireEvent.mouseEnter(pixel);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
});
