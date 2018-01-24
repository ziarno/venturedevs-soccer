import React, { Component } from 'react';
import { start, stop } from 'actions/timer';
import { connect } from 'react-redux';
import { getPlayersCount, getPlayersData } from 'reducers/data';
import { getTime } from 'reducers/timer';
import { PropTypes } from 'utils';
import { Player } from 'components';
import './styles.css';

class Field extends Component {
  render() {
    const { playersData } = this.props;

    return (
      <div className="Field">
        {playersData.map(([number, x, y]) => {
          return <Player key={number} id={number} x={x} y={y} />
        })}
      </div>
    );
  }
}

Field.propTypes = {
  playersCount: PropTypes.number,
  playersData: PropTypes.array,
};

Field.defaultProps = {
  playersCount: 0,
  playersData: [],
};

const mapStateToProps = state => {
  const time = getTime(state);
  return {
    playersCount: getPlayersCount(state),
    playersData: getPlayersData(state)(time).toJS(),
  };
};

const mapDispatchToProps = dispatch => ({
  handleStart: () => dispatch(start()),
  handleStop: () => dispatch(stop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Field
);
