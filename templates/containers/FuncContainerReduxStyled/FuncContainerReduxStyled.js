import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../redux/FuncContainerReduxStyled/actions';

import { Wrapper } from './FuncContainerReduxStyled.style';

const FuncContainerReduxStyled = ({ id, name, setName }) => {

  return (
    <Wrapper id={id} onClick={setName}>
      {`There is some content: ${name}`}
    </Wrapper>
  );
};

FuncContainerReduxStyled.propTypes = {
  id   : PropTypes.string,
  name : PropTypes.string,
};

FuncContainerReduxStyled.defaultProps = {
  id   : 'id',
  name : '',
};

const mapStateToProps = state => {
  const { FuncContainerReduxStyled } = state;

  return {
    name: FuncContainerReduxStyled.name,
  };
};

const mapDispatchToProps = {
  setName: actions.setName,
};

const connectedFuncContainerReduxStyled = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FuncContainerReduxStyled);

// because of: https://github.com/reduxjs/react-redux/issues/111#issuecomment-140744686
connectedFuncContainerReduxStyled.defaultProps = FuncContainerReduxStyled.defaultProps;

export default connectedFuncContainerReduxStyled;
