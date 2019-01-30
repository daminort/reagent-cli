import React from 'react';
import PropTypes from 'prop-types';

const FuncComponent = ({ id }) => {

  return (
    <div id={id}>
      There is some content
    </div>
  );
};

FuncComponent.propTypes = {
  id : PropTypes.string,
};

FuncComponent.defaultProps = {
  id : 'id',
};

export default FuncComponent;
