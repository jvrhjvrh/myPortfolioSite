import React from 'react';
import propTypes from 'proptypes';

const Pixel = ({
    color,
    index,
    onMouseDown,
    onHover,
}) => (
    <div
        style={{
            backgroundColor: color,
            height: '100%',
            width: '100%',
            borderRight: '1px solid black',
            borderBottom: '1px solid black',
        }}
        onMouseDown={() => onMouseDown(index)}
        onMouseOver={() => onHover(index)}
    />
);

Pixel.propTypes = {
    color: propTypes.string,
    index: propTypes.number.isRequired,
    onMouseDown: propTypes.func,
    onHover: propTypes.func,
};

Pixel.defaultProps = {
    color: '',
    onMouseDown: () => {},
    onHover: () => {},
};

export default Pixel;
