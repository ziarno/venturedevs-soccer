import React, { Component } from 'react';
import { noop } from 'lodash';
import { Slider } from 'antd';
import { connect } from 'react-redux';
import { isRunning, getTime } from 'reducers/timer';
import { setTime, stop } from 'actions/timer';
import { getPlayerPositions, getInterval } from 'reducers/data';
import { PropTypes, secondsToTime } from 'utils';
import './styles.css';

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.onSliderChange = this.onSliderChange.bind(this);
    this.sliderFormatter = this.sliderFormatter.bind(this);
    this.getMarks = this.getMarks.bind(this);
  }

  componentDidMount() {
    const { interval, handleSetTime, handleStop } = this.props;

    this.timer = setInterval(() => {
      const { isRunning, max, time } = this.props;
      const nextTime = max === time ? max : time + 1;
      if (isRunning) {
        if (time !== nextTime) {
          handleSetTime(nextTime);
        } else {
          handleStop();
          handleSetTime(0);
        }
      }
    }, interval);
  }

  onSliderChange(value) {
    const { handleSetTime } = this.props;

    handleSetTime(value);
  }

  sliderFormatter(value) {
    return secondsToTime(value / 10);
  }

  getMarks() {
    const { max, time } = this.props;
    const marks = { 0: secondsToTime(time / 10) };
    marks[max] = secondsToTime(max / 10);

    return marks;
  }

  render() {
    const { time, max } = this.props;

    return (
      <div className="Timeline">
        <Slider
          tipFormatter={this.sliderFormatter}
          defaultValue={0}
          value={time}
          max={max}
          marks={this.getMarks()}
          onChange={this.onSliderChange}
        />
      </div>
    );
  }
}

Timeline.propTypes = {
  isRunning: PropTypes.bool,
  time: PropTypes.number,
  handleSetTime: PropTypes.func,
  handleStop: PropTypes.func,
  interval: PropTypes.number,
  max: PropTypes.number,
};

Timeline.defaultProps = {
  isRunning: false,
  time: 0,
  handleSetTime: noop,
  handleStop: noop,
  interval: 100,
  max: 0,
};

const mapStateToProps = state => {
  const playerPositions = getPlayerPositions(state);

  return {
    max: playerPositions.size,
    isRunning: isRunning(state),
    time: getTime(state),
    interval: getInterval(state),
  };
};

const mapDispatchToProps = dispatch => ({
  handleSetTime: time => dispatch(setTime(time)),
  handleStop: () => dispatch(stop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Timeline
);
