import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;