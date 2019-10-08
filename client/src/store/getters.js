import { getNewestChange, SETTINGS, GETTERS } from './utils';

const genFunc = key => state => getNewestChange(state, key);

const combined = {
  ...SETTINGS,
  ...GETTERS,
};

const getters = Object.keys(combined).reduce((acc, key) => {
  acc[`guild${key}`] = genFunc(SETTINGS[key]);
  return acc;
}, {});

export default {
  ...getters,
  hasChanges(state) {
    return state.changes.length !== 0;
  },
};
