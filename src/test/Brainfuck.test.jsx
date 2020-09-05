import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Brainfuck from '../pages/brainfuck';

const hardcoreCode = '+[------->++<]>--.-------.[--->+<]>---.+[--->+<]>.-[->+++<]>+.+[---->+<]>+++.+[----->+<]>.------------.++++++++++.------.--[--->+<]>-.---[->++++<]>.------------.+.++++++++++.+[---->+<]>+++.---[->++++<]>-.++.-----.-----------.+++++++++++++.[-->+++++<]>+++.-[--->++<]>--.-------.--[--->+<]>---.--------------.-[--->+<]>-.--[->++++<]>+.--[->+++<]>.----.+++++++.--[--->+<]>--.--[->++++<]>+.--[->+++<]>.----.+++++++.--[--->+<]>--.--[->++++<]>+.--[->+++<]>.----.+++++++.---[->+++<]>-.-------------.-[->++<]>.[-->+<]>+++.>+[--->++<]>+.---[----->+<]>.[->+++++<]>-.---[->++++<]>+.+[-->+<]>++.---[->++<]>.[-->+<]>++++.+.++++.+.--.-----.+++++++.[-->+++<]>+.-[--->++<]>.-------.+++++++.-.+.--.++.>++++++++++.-[----->+<]>-.-.-.++.++++.+.---------.++++++++.--------.------------.++++.+..+.------.----[->++<]>.-[--->++<]>--.+.+.-------.++++++.+.---------.++++++++.+[-->+++<]>+.[-->+<]>+++.++++++.---[-->+++<]>.-.--------.+++.+++++.------.--.+.++.---.';
const brackets = '[[[[]]]]';

it('renders correctly', () => {
    const component = render(<div data-testid="custom-element"><Brainfuck /></div>);
    expect(component.getByTestId('custom-element')).toMatchSnapshot();
});

test('should show Hello World!', () => {
    const component = render(<Brainfuck />);
    const input = component.getByPlaceholderText('Insert brainfuck code here');
    fireEvent.change(input, { target: { value: '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.' } });
    const button = component.getByText('Translate ->');
    fireEvent.click(button);
    component.getByText('Hello World!');
});

test('should only get .+-><[]', () => {
    const component = render(<Brainfuck />);
    const input = component.getByPlaceholderText('Insert brainfuck code here');
    fireEvent.change(input, { target: { value: '..++++dsad' } });
    component.getByText('..++++');
});

test('more complicated brainfuck code', () => {
    const component = render(<Brainfuck />);
    const input = component.getByPlaceholderText('Insert brainfuck code here');
    fireEvent.change(input, { target: { value: hardcoreCode } });
    const button = component.getByText('Translate ->');
    fireEvent.click(button);
});

test('brackets', () => {
    const component = render(<Brainfuck />);
    const input = component.getByPlaceholderText('Insert brainfuck code here');
    fireEvent.change(input, { target: { value: brackets } });
    const button = component.getByText('Translate ->');
    fireEvent.click(button);
});

test('dont go into negative', () => {
    const component = render(<Brainfuck />);
    const input = component.getByPlaceholderText('Insert brainfuck code here');
    fireEvent.change(input, { target: { value: '<' } });
    const button = component.getByText('Translate ->');
    fireEvent.click(button);
});
