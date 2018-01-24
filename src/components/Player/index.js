import React, { Component } from 'react';
import { PropTypes } from 'utils';
import { times } from 'lodash';
import './styles.css';

class Player extends Component {
  render() {
    const { id, x, y } = this.props;

    return (
      <div className="Player" style={{ top: `${(1 - y) * 100}%`, left: `${x * 100}%` }}>
        {id}
      </div>
    );
  }
}

Player.propTypes = {
  id: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Player;
