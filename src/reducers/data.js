import typeToReducer from 'type-to-reducer';

export default typeToReducer({}, {});

export const getPlayerPositions = state => state.getIn(['data', 'player_positions']);
export const getPlayersCount = state => state.getIn(['data', 'players_count']);
export const getPlayersData = state => time => {
  const max = state.getIn(['data', 'player_positions']).size;
  return state.getIn(['data', 'player_positions', time >= max ? max - 1 : time]);
};
export const getInterval = state => state.getIn(['data', 'interval']);
