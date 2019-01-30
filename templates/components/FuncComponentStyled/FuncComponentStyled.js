import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FuncComponentStyled.style';

const FuncComponentStyled = ({ id }) => {

  return (
    <Wrapper id={id}>
      There is some content
    </Wrapper>
  );
};

FuncComponentStyled.propTypes = {
  id : PropTypes.string,
};

FuncComponentStyled.defaultProps = {
  id : 'id',
};

export default FuncComponentStyled;
