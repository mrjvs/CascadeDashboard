export function getSelectedGuild(state) {
  return state.guilds.find(val => val.id === state.selectedGuild);
}

export function selectedGuildExists(state) {
  return getSelectedGuild(state) != null;
}

// gets value from made changes or guild data if no change made
export function getNewestChange(state, type, key) {
  if (selectedGuildExists(state)) {
    const index = state.changes.findIndex(val => val.type === type);
    if (index !== -1) {
      return state.changes[index].value;
    }
    return getSelectedGuild(state)[key];
  }
  return null;
}

export function getStateGuildData(state, key) {
  if (selectedGuildExists(state)) return getSelectedGuild(state)[key];
  return null;
}

function replaceChange(state, type, key, value, index) {
  if (selectedGuildExists(state)) {
    state.changes.splice(index, 1);
    if (getSelectedGuild(state)[key] !== value) {
      state.changes.push({
        type,
        value,
      });
    }
  }
}

function addChange(state, type, key, value) {
  if (selectedGuildExists(state)) {
    if (getSelectedGuild(state)[key] !== value) {
      state.changes.push({
        type,
        value,
      });
    }
  }
}

export function setChange(state, type, key, value) {
  const index = state.changes.findIndex(val => val.type === type);
  if (index === -1) {
    addChange(state, type, key, value);
  } else {
    replaceChange(state, type, key, value, index);
  }
}

export function parseGuildData(state) {
  return state.changes.reduce((acc, el) => {
    acc[el.type] = el.value;
    return acc;
  }, {});
}
