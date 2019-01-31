import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../redux/FuncComponentReduxStyled/actions';

import { Wrapper } from './FuncComponentReduxStyled.style';

const FuncComponentReduxStyled = ({ id, name, setName }) => {

  return (
    <Wrapper id={id} onClick={setName}>
      {`There is some content: ${name}`}
    </Wrapper>
  );
};

FuncComponentReduxStyled.propTypes = {
  id   : PropTypes.string,
  name : PropTypes.string,
};

FuncComponentReduxStyled.defaultProps = {
  id   : 'id',
  name : '',
};

const mapStateToProps = state => {
  const { FuncComponentReduxStyled } = state;

  return {
    name: FuncComponentReduxStyled.name,
  };
};

const mapDispatchToProps = {
  setName: actions.setName,
};

const connectedFuncComponentReduxStyled = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FuncComponentReduxStyled);

// because of: https://github.com/reduxjs/react-redux/issues/111#issuecomment-140744686
connectedFuncComponentReduxStyled.defaultProps = FuncComponentReduxStyled.defaultProps;

export default connectedFuncComponentReduxStyled;
