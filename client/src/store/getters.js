import { getNewestChange, SETTINGS, GETTERS } from './utils';

const genSettingsFunc = key => state => getNewestChange(state, key);

const settings = Object.keys(SETTINGS).reduce((acc, key) => {
  acc[`guild${key}`] = genSettingsFunc(SETTINGS[key]);
  return acc;
}, {});

const genGetter = key => state => state[key];

const getters = Object.keys(GETTERS).reduce((acc, key) => {
  acc[key] = genGetter(GETTERS[key]);
  return acc;
}, {});

export default {
  ...settings,
  ...getters,
  hasChanges(state) {
    return state.changes.length !== 0;
  },
  getSelectedGuild(state) {
    return state.guilds.find(val => val.id === state.selectedGuildId);
  },
};
