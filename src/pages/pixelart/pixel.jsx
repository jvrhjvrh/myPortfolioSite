/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import propTypes from 'proptypes';

import './pixel.css';

const Pixel = ({
    color,
    index,
    onMouseDown,
    onHover,
    testid,
}) => (
    <div
        data-testid={testid}
        style={{
            backgroundColor: color,
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
    testid: propTypes.string,
};

Pixel.defaultProps = {
    color: '',
    onMouseDown: () => {},
    onHover: () => {},
    testid: null,
};

export default Pixel;
