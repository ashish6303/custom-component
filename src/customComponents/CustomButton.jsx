import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({
  variant,
  size,
  name,
  onClick,
  isDisabled,
  isSubmit,
  isCancel,
  color,
  backgroundColor,
 ...props
}) => {
  const classes = [
    'button',
    variant && `button-${variant}`,
    size && `button-${size}`,
  ].filter(Boolean).join(' ');

  const handleClick = (event) => {
    if (isDisabled) return;
    onClick(event);
  };

  const colorMap = {
    primary: '#0000FF', // blue
    secondary: '#FFFF00', // yellow
    danger: '#FF0000', // red
  };

  let buttonColor = colorMap[color] || color;
  let buttonBackgroundColor = colorMap[backgroundColor] || backgroundColor;

  return (
    <button
      className={classes}
      type={isSubmit? 'ubmit' : 'button'}
      onClick={handleClick}
      disabled={isDisabled}
      style={{
        color: buttonColor,
        backgroundColor: buttonBackgroundColor,
      }}
    >
      {name}
    </button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  isCancel: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary', // blue
    'secondary', // yellow
    'danger', // red
  ]),
  backgroundColor: PropTypes.oneOf([
    'primary', // blue
    'secondary', // yellow
    'danger', // red
  ]),
};

CustomButton.defaultProps = {
  variant: 'contained',
  size: 'medium',
  isDisabled: false,
  isSubmit: false,
  isCancel: false,
  color: 'primary',
  backgroundColor: 'primary',
};

export default CustomButton;