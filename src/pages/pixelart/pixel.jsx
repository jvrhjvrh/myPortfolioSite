/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import propTypes from 'proptypes';

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
    testid: propTypes.string,
};

Pixel.defaultProps = {
    color: '',
    onMouseDown: () => {},
    onHover: () => {},
    testid: null,
};

export default Pixel;
