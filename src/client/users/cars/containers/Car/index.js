import React, { PropTypes } from 'react';

const Car = React.createClass({

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
        Car
      </div>
    );
  },
});

export default Car;
