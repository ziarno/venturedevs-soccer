import React, { Component } from 'react';
import { PropTypes } from 'utils';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { noop } from 'lodash';
import { start, stop } from 'actions/timer';
import { isRunning } from 'reducers/timer';
import './styles.css';

class Actions extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick = () => {
    const { isRunning, handleStart, handleStop } = this.props;
    if (isRunning) {
      handleStop();
    } else {
      handleStart();
    }
  };

  render() {
    const { isRunning } = this.props;
    const buttonLabel = isRunning ? 'Pause session' : 'Run session';

    return (
      <div className="Actions">
        <Button onClick={this.onButtonClick} icon={isRunning ? 'pause-circle' : 'play-circle'}>
          {buttonLabel}
        </Button>
      </div>
    );
  }
}

Actions.propTypes = {
  isRunning: PropTypes.bool,
  handleStart: PropTypes.func,
  handleStop: PropTypes.func,
};

Actions.defaultProps = {
  isRunning: false,
  handleStart: noop,
  handleStop: noop,
};

const mapStateToProps = state => ({
  isRunning: isRunning(state),
});

const mapDispatchToProps = dispatch => ({
  handleStart: () => dispatch(start()),
  handleStop: () => dispatch(stop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Actions
);
