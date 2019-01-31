import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../redux/FuncComponentRedux/actions';

const FuncComponentRedux = ({ id, name, setName }) => {

  return (
    <div id={id} onClick={setName}>
      {`There is some content: ${name}`}
    </div>
  );
};

FuncComponentRedux.propTypes = {
  id   : PropTypes.string,
  name : PropTypes.string,
};

FuncComponentRedux.defaultProps = {
  id   : 'id',
  name : '',
};

const mapStateToProps = state => {
  const { FuncComponentRedux } = state;

  return {
    name: FuncComponentRedux.name,
  };
};

const mapDispatchToProps = {
  setName: actions.setName,
};

const connectedFuncComponentRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FuncComponentRedux);

// because of: https://github.com/reduxjs/react-redux/issues/111#issuecomment-140744686
connectedFuncComponentRedux.defaultProps = FuncComponentRedux.defaultProps;

export default connectedFuncComponentRedux;
