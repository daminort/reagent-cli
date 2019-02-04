import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends PureComponent {

  static propTypes = {
    id      : PropTypes.string,
    onClick : PropTypes.func,
  }

  static defaultProps = {
    id      : 'id',
    onClick : () => {},
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
    const { id } = this.props;

    return (
      <div id={id} onClick={this.onClick}>
        There is some content
      </div>
    );
  }
}

export default ClassComponent;
