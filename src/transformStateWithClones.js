'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let result = [];
  let currentState = { ... state};
  for (const obj of actions) {
    if (obj.type === 'clear') {
      currentState = {};
      result.push({ ... currentState});
    }

    if (obj.type === 'addProperties') {
      currentState = { ... currentState, ... obj.extraData};
      result.push({ ... currentState});
    }

    if (obj.type === 'removeProperties') {
      for (const x of obj.keysToRemove) {
        delete currentState[x];
      }
      result.push({ ... currentState});
    }
  }

  return result;
}

module.exports = transformStateWithClones;
