import React from 'react';

export default ({ color, index, onMouseDown, onHover }) => (
    <div
        style={{
            backgroundColor: color,
            height: '100%',
            width: '100%',
            borderRight: '1px solid black',
            borderBottom: '1px solid black',
        }}
        onMouseDown={() => { onMouseDown(); onHover(index); }}
        onMouseOver={() => onHover(index)}
    />
);
