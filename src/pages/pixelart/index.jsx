import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Pixel from './pixel';
import './index.css';

export default () => {
    const [rgba, setRgba] = useState({
        r: 0,
        g: 0,
        b: 0,
        a: 0,
    });

    const [pixelGrid, setPixelGrid] = useState(Array.from(Array(256)).fill(rgba));
    const [isPainting, setIsPainting] = useState(false);

    const changePixelColor = (index) => {
        const newPixelGrid = JSON.parse(JSON.stringify(pixelGrid));
        newPixelGrid[index] = rgba;
        setPixelGrid(newPixelGrid);
    };

    const handleMouseDown = (index) => {
        setIsPainting(true);
        changePixelColor(index);
    };

    const handleHover = (index) => {
        if (isPainting) {
            changePixelColor(index);
        }
    };

    const pixelArray = pixelGrid.map(
        (pixel, index) => (
            <Pixel
                color={`rgba(${pixel.r},${pixel.g},${pixel.b},${pixel.a})`}
                index={index}
                onHover={handleHover}
                onMouseDown={handleMouseDown}
            />
        ),
    );

    const handleMouseUp = () => {
        setIsPainting(false);
    };

    const chooseColor = (event) => {
        setRgba(event.rgb);
    };

    return (

        <div
            style={{ display: 'flex' }}
            data-testid="pixelart-page"
            onMouseUp={handleMouseUp}
            draggable={false}
            onDragStart={() => false}
            className="unselectable"
        >
            <div className="pixel-grid">
                {
                    pixelArray
                }
            </div>
            <ChromePicker onChange={chooseColor} color={rgba} />
        </div>
    );
};
