import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../redux/FuncContainerRedux/actions';

const FuncContainerRedux = ({ id, name, setName }) => {

  return (
    <div id={id} onClick={setName}>
      {`There is some content: ${name}`}
    </div>
  );
};

FuncContainerRedux.propTypes = {
  id   : PropTypes.string,
  name : PropTypes.string,
};

FuncContainerRedux.defaultProps = {
  id   : 'id',
  name : '',
};

const mapStateToProps = state => {
  const { FuncContainerRedux } = state;

  return {
    name: FuncContainerRedux.name,
  };
};

const mapDispatchToProps = {
  setName: actions.setName,
};

const connectedFuncContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FuncContainerRedux);

// because of: https://github.com/reduxjs/react-redux/issues/111#issuecomment-140744686
connectedFuncContainerRedux.defaultProps = FuncContainerRedux.defaultProps;

export default FuncContainerRedux;
