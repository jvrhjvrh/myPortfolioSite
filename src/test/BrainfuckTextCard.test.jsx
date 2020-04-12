import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BrainfuckTextCard from '../pages/brainfuck/BrainfuckTextCard';

it('shows data correctly', () => {
    const component = render(
        <BrainfuckTextCard
            title="testing"
            value="testing123Uhuu"
            onChange={() => {}}
            placeholder="notATest"
        />,
    );

    component.getByText('testing');
    component.getByText('testing123Uhuu');
    component.getByPlaceholderText('notATest');
});

it('adds data properly', () => {
    const mockCallback = jest.fn((x) => x);
    const component = render(
        <BrainfuckTextCard
            title="testing"
            value=""
            onChange={mockCallback}
            placeholder="notATest"
        />,
    );
    const input = component.getByPlaceholderText('notATest');

    fireEvent.change(input, { target: { value: 'aaaaaaaaaa' } });
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe('aaaaaaaaaa');
});
