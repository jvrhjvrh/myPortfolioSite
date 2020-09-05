import React, { useState } from 'react';
import { Button } from 'antd';

import BrainfuckTextCard from './BrainfuckTextCard';

import './index.css';

export default () => {
    const [code, setCode] = useState('');
    const [translation, setTranslation] = useState('');

    const filterCode = (unfilteredCode) => {
        const filteredCode = unfilteredCode.replace(/[^.[\] +\-><\n]/g, '');
        setCode(filteredCode);
    };

    const translateCode = () => {
        const filteredCode = code.replace(/[ \n]/g, '');
        let pointer = 0;
        const array = [0];
        let text = '';
        let brackets = 0;
        let currentPositionCode = 0;

        while (currentPositionCode < filteredCode.length) {
            switch (filteredCode[currentPositionCode]) {
                case '.':
                    text += String.fromCharCode(array[pointer]);
                    break;
                case '[':
                    if (array[pointer] === 0) {
                        currentPositionCode += 1;
                        while (filteredCode[currentPositionCode] !== ']' || brackets !== 0) {
                            if (filteredCode[currentPositionCode] === '[') {
                                brackets += 1;
                            }
                            if (filteredCode[currentPositionCode] === ']') {
                                brackets -= 1;
                            }
                            currentPositionCode += 1;
                        }
                    }
                    break;
                case ']':
                    if (array[pointer] !== 0) {
                        currentPositionCode -= 1;
                        while (filteredCode[currentPositionCode] !== '[' || brackets !== 0) {
                            if (filteredCode[currentPositionCode] === ']') {
                                brackets += 1;
                            }
                            if (filteredCode[currentPositionCode] === '[') {
                                brackets -= 1;
                            }
                            currentPositionCode -= 1;
                        }
                    }
                    break;
                case '+':
                    if (array[pointer] === 255) {
                        array[pointer] = -1;
                    }
                    array[pointer] += 1;
                    break;
                case '-':
                    if (array[pointer] === 0) {
                        array[pointer] = 256;
                    }
                    array[pointer] -= 1;
                    break;
                case '>':
                    pointer += 1;
                    if (!array[pointer]) {
                        array.push(0);
                    }
                    break;
                case '<':
                    if (pointer > 0) {
                        pointer -= 1;
                    }
                    break;
                default:
            }
            currentPositionCode += 1;
        }

        setTranslation(text);
    };

    return (
        <div className="app" data-testid="brainfuck-page">
            <BrainfuckTextCard disabled={false} value={code} onChange={filterCode} title="Code" placeholder="Insert brainfuck code here" />
            <Button className="translate-button" onClick={translateCode} type="primary">
                Translate -&gt;
            </Button>
            <BrainfuckTextCard disabled value={translation} title="Translation" placeholder="Translation here" />
        </div>
    );
};
