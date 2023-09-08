import { data } from './types';

// write a const fs for data persistence
const fs = require('fs');

let dataStore: data = {
  users: [],
  badges: [],
  userTypes: [],
  tokens: []
};

// Use get() to access the data
function getData(): data {
  return dataStore;
}

// Use set(newData) to pass in the entire data object, with modifications made
// - Only needs to be used if you replace the data store entirely
// - Javascript uses pass-by-reference for objects... read more here: https://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference
// Hint: this function might be useful to edit in iteration 2
function setData(newData: data): void {
  // make the newData parameter into a json string
  const jsonstr = JSON.stringify(newData);
  // write the newData into export.json as dataStore
  fs.writeFileSync('export.json', jsonstr, { flag: 'w' });
  // update the dataStore within this file as well
  dataStore = newData;
}

export { getData, setData };
