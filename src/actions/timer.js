export const TIMER_TOGGLE = 'TIMER_TOGGLE';
export const TIMER_SET = 'TIMER_SET';

export const start = () => {
  return {
    type: TIMER_TOGGLE,
    payload: {
      running: true,
    },
  };
};

export const stop = () => {
  return {
    type: TIMER_TOGGLE,
    payload: {
      running: false,
    },
  };
};

export const setTime = time => {
  return {
    type: TIMER_SET,
    payload: {
      time,
    },
  };
};
