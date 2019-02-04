import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../redux/ClassContainerReduxStyled/actions';

import { Wrapper } from './ClassContainerReduxStyled.style';

class ClassContainerReduxStyled extends Component {

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
    name    : 'ClassContainerReduxStyled',
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
      <Wrapper id={id} onClick={this.onClick}>
        {`There is some content: ${name}`}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const { ClassContainerReduxStyled } = state;

  return {
    name: ClassContainerReduxStyled.name,
  };
};

const mapDispatchToProps = {
  setName: actions.setName,
};

const connectedClassContainerReduxStyled = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassContainerReduxStyled);

// because of: https://github.com/reduxjs/react-redux/issues/111#issuecomment-140744686
connectedClassContainerReduxStyled.defaultProps = ClassContainerReduxStyled.defaultProps;

export default connectedClassContainerReduxStyled;
