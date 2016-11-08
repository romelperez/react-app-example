import React, { PropTypes } from 'react';

const User = React.createClass({

  propTypes: {},

  getDefaultProps () {
    return {};
  },

  getInitialState () {
    return {};
  },

  componentDidMount () {},

  componentWillUnmount () {},

  render () {

    const props = this.props;
    const state = this.state;

    return (
      <div>
        User
      </div>
    );
  },
});

export default User;
