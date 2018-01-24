export { default as PropTypes } from './PropTypes';
export { default as data } from './data';

const twoDigits = value => `0${value}`.substr(-2);

export const secondsToTime = time => {
  return [Math.floor(time / 3600), Math.floor(time / 60), Math.ceil(time % 60)]
    .map(twoDigits)
    .join(':');
};
