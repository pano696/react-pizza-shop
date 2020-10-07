import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

const Button = ({className, outline, children, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline
    })}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: propTypes.string,
  outline: propTypes.bool,
  onClick: propTypes.func,
}

export default Button;
