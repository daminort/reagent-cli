import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../redux/ClassContainerRedux/actions';

class ClassContainerRedux extends Component {

  static propTypes = {
    id      : PropTypes.string,
    onClick : PropTypes.func,
    // Redux
    name    : PropTypes.string,
    setName : PropTypes.func.isRequired,
  }

  static defaultProps = {
    id      : 'id',
    onClick : () => {},
    name    : 'ClassContainerRedux',
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { id, onClick } = this.props;
    onClick(id);
  }

  render() {
    const { id, name } = this.props;

    return (
      <div id={id} onClick={this.onClick}>
        {`There is some content: ${name}`}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { ClassContainerRedux } = state;

  return {
    name: ClassContainerRedux.name,
  };
};

const mapDispatchToProps = {
  setName: actions.setName,
};

const connectedClassContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassContainerRedux);

// because of: https://github.com/reduxjs/react-redux/issues/111#issuecomment-140744686
connectedClassContainerRedux.defaultProps = ClassContainerRedux.defaultProps;

export default connectedClassContainerRedux;
