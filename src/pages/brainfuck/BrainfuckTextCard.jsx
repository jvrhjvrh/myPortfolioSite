import React from 'react';
import propTypes from 'proptypes';
import { Card, Input } from 'antd';

const { TextArea } = Input;

const BrainfuckTextCard = ({
    title,
    value,
    onChange,
    disabled,
    placeholder,
}) => (
    <Card title={title} bodyStyle={{ height: '100%' }} headStyle={{ textAlign: 'center' }}>
        <div className="text-container">
            <TextArea
                placeholder={placeholder}
                className="textarea-input"
                value={value}
                autoSize={{ minRows: 10 }}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            />
        </div>
    </Card>
);

BrainfuckTextCard.propTypes = {
    title: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func,
    disabled: propTypes.bool,
    placeholder: propTypes.string,
};

BrainfuckTextCard.defaultProps = {
    title: '',
    value: '',
    onChange: () => {},
    disabled: false,
    placeholder: propTypes.string,
};

export default BrainfuckTextCard;
