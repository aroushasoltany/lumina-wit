import { getData, setData } from './dataStore';
import {data, medicalDataType, user, userType, badge, task, token} from './types';
import {generateUsername, classifyType, getHashOf} from './helpers';
import validator from 'validator';
import HttpError from 'http-errors';

/**
 * FUNCTION: authSignUp
 * Given a new user's email, first&last name, password, dob, gender, medicalInfo;
 * sign the user up to the platform.
 * 
 * return a userType and userName.
 * 
 * OPTIONAL
 * !! additional error checking etc passwords, names
 * !! tokens, userids, etc.
 * !! hashing password
 * !! session tokens
 */
export function authSignUp
(email: string, nameFirst: string, nameLast: string, password: string, dob: Date, gender: string, medicalInfo: medicalDataType): userType {
  // ERROR CHECK
  // check if the email already exists - redirect user to login
  const data: data = getData();
  const users: user[] = data.users;
  const userExists: user | undefined = users.find((u) => u.email === email);
  if (userExists !== undefined) {
    throw HttpError(400, 'This email already exists.');
  }
  // check if the email is valid
  if (!validator.isEmail(email)) {
    throw HttpError(400, 'Invalid email address.');
  }

  // generate a username
  const username: string = generateUsername(nameFirst, nameLast);

  // classify the userType using dob
  const type = classifyType(dob);

  // create the task
  const task: task = {
    name: type,
    badge: {
      username: username,
      type: type,
      category: 'empty'
    },
    pageURL: 'empty'
  };

  // create userType obj
  const userType = {
    username: username,
    type: type,
    tasks: [task]
  };

  // store the user in the database
  const newUser: user = {
    username: username,
    email: email,
    nameFirst: nameFirst,
    nameLast: nameLast,
    password: password,
    badges: [],
    dob: dob,
    gender: gender,
    medicalInfo: medicalInfo,
    completedTasks: [],
    incompleteTasks: [],
    userType: userType
  };
  data.users.push(newUser);

  // store the usertype and username object in the database
  data.userTypes.push(userType);

  // create a unique token
  const token = String(Math.floor(Math.random() * 10000));
  const newToken: token = { token, username };
  data.tokens.push(newToken);
  setData(data);

  // return usertype
  return userType;
};

/**
 * FUNCTION: authLogin
 * 
 * given the username and password, log the user back into the account.
 * // needs tokens
 */
export function authLogin(username: string, password: string): token {
  // ERROR CHECKING:
  // check if the username exists
  const data: data = getData();
  const users: user[] = data.users;
  const user: user | undefined = users.find((u) => u.username === username);
  if (user === undefined) {
    throw HttpError(400, 'This username is invalid');
  }
  // hash the pw
  const hashPass = getHashOf(password);
  // check if the password is correct
  if (user.password !== hashPass) {
    throw HttpError(400, 'The password is incorrect');
  }
  // create a unique token
  const token = String(Math.floor(Math.random() * 10000));
  // add  token to the database
  const newToken: token = { token, username };
  data.tokens.push(newToken);

  setData(data);
  return { token, username };
}
