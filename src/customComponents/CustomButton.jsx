import React from 'react';
import PropTypes from 'prop-types';

const btnSize = {
  small: {
    fontSize: '12px',
    padding: '4px 8px',
    height: '24px',
  },
  medium: {
    fontSize: '14px',
    padding: '6px 12px',
    height: '32px',
  },
  large: {
    fontSize: '16px',
    padding: '8px 16px',
    height: '40px',
  },
};

const CustomButton = ({
  variant,
  size,
  name,
  onClick,
  isDisabled,
  isSubmit,
  color,
  backgroundColor,
  style,
  className,
  ...props
}) => {

  const handleClick = (event) => {
    if (isDisabled) return;
    onClick && onClick(event);
  };

  const colorMap = {
    primary: '#0000FF', // blue
    secondary: '#FFFF00', // yellow
    danger: '#FF0000', // red
  };

  const buttonColor = colorMap[color] || color;
  const buttonBackgroundColor = colorMap[backgroundColor] || backgroundColor;
  const sizeStyles = btnSize[size] || btnSize.medium; // Default to medium size if not specified

  // Define styles based on the variant
  const variantStyles = variant === 'contained'
    ? {
      color: '#FFF',
      backgroundColor: buttonColor,
      border: 'none',
    }
    : variant === 'outlined'
      ? {
        color: buttonColor,
        backgroundColor: 'transparent',
        border: `2px solid ${buttonColor}`,
      }
      : {};

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
      disabled={isDisabled}
      className={className}
      style={{
        ...sizeStyles,
        ...variantStyles,
        ...style,
        cursor: 'pointer'
      }}
      {...props}
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
  className: PropTypes.string, // Custom class names
  style: PropTypes.object,
};

CustomButton.defaultProps = {
  variant: 'contained',
  size: 'medium',
  isDisabled: false,
  isSubmit: false,
  color: 'primary',
  backgroundColor: 'primary',
  className: '',
  style: {}
};

export default CustomButton;
