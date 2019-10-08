export const SETTINGS = {
  Prefix: 'coreSettings.prefix',
  UseEmbedForMessages: 'coreSettings.useEmbedForMessages',
  DeleteCommand: 'coreSettings.deleteCommand',
  ShowPermErrors: 'coreSettings.showPermErrors',
  AdminsHaveAllPerms: 'coreSettings.adminsHaveAllPerms',
  MentionPrefix: 'coreSettings.mentionPrefix',
  AllowTagCommands: 'coreSettings.allowTagCommands',
  ShowModuleErrors: 'coreSettings.showModuleErrors',
};

export const GETTERS = {
  guildMemberCount: 'memberCount',
};

export function getSelectedGuild(state) {
  return state.guilds.find(val => val.id === state.selectedGuild);
}

export function selectedGuildExists(state) {
  return getSelectedGuild(state) != null;
}

function getValueFromPath(object, path) {
  const splat = path.split('.');
  let curr = object;
  for (let i = 0; i < splat.length; i += 1) {
    curr = curr[splat[i]];
  }
  return curr;
}

// gets value from made changes or guild data if no change made
export function getNewestChange(state, path) {
  if (selectedGuildExists(state)) {
    const changes = state.changes.find(el => el.path === path);
    if (changes) return changes.value;
    return getValueFromPath(getSelectedGuild(state), path);
  }
  return null;
}

export function getStateGuildData(state, key) {
  if (selectedGuildExists(state)) return getSelectedGuild(state)[key];
  return null;
}

function addChange(state, path, value) {
  state.changes.push({
    path,
    value,
  });
}

function replaceChange(state, path, value, index) {
  state.changes.splice(index, 1);

  const oldValue = getValueFromPath(getSelectedGuild(state), path);
  if (oldValue !== value) {
    addChange(state, path, value);
  }
}

export function setChange(state, path, value) {
  if (!selectedGuildExists(state)) return;
  const index = state.changes.findIndex(val => val.path === path);
  if (index === -1) {
    addChange(state, path, value);
  } else {
    replaceChange(state, path, value, index);
  }
}

// Do the reverse of get value from path
// Make an object with all changes
export function parseCoreSettingChanges(state) {
  return state.changes.reduce((acc, el) => {
    if (el.path.includes('coreSettings')) {
      acc[el.path.split('coreSettings.')[1]] = el.value;
    }
    return acc;
  }, {});
}
