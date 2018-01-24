import typeToReducer from 'type-to-reducer';
import { timer } from 'actions';

export default typeToReducer({
  [timer.TIMER_TOGGLE]: (state, { payload: { running } }) => state.set('running', running),
  [timer.TIMER_SET]: (state, { payload: { time } }) => state.set('time', time),
}, {});

export const isRunning = state => state.getIn(['timer', 'running']);
export const getTime = state => state.getIn(['timer', 'time']);
