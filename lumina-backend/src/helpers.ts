import { getData } from './dataStore';
import crypto from 'crypto';
import { user, userType, data } from './types';

/**
 * 
 * @param username
 * @returns boolean
 */
function checkUsernameExists(usernameCheck: string): boolean {
  const data: data = getData();
  const users: user[] = data.users;
  const user: user | undefined = users.find((user) => user.username === usernameCheck);
  if (user === undefined) {
    return false;
  }
  return true;
}

/**
 * 
 * @param nameFirst: first name of the user
 * @param nameLast: last name of the user
 * @return username: string
 * // username will be a concatanation of first and last name, with randomised number.
 */
export function generateUsername (nameFirst: string, nameLast: string): string {
  // concatenate and make lowercase
  let userName: string = nameFirst.concat(nameLast);
  userName = userName.toLowerCase();

  // check if the username exists,
  // if yes, add a number to it
  let nameExists: boolean = checkUsernameExists(userName);
  if (nameExists) {
    let testName: string = userName;
    let i = 0;
    let unique = false;
    while (!unique) {
      testName = userName;
      testName = testName.concat(i.toString());
      nameExists = checkUsernameExists(testName);
      if (!nameExists) {
        userName = testName;
        unique = true;
      }
      i++;
    }
  }
  return userName;

}

/**
 * 
 * @param dob Date 
 */
export function classifyType(dob: Date): string {
  // NOTE!! THIS CAN BE AUTOMATED BETTER BUT IM NOT SURE HOW THE DATE PACKAGE WORKS
  const present = new Date().getFullYear();
  const birthYear = dob.getFullYear();
  const age = present - birthYear;

  if (age > 18 && age < 25) {
    return 'student';
  }

  if (age < 18) {
    return 'child';
  }

  if (age >= 25 && age < 65) {
    return 'adult';
  }

  if (age >= 65) {
    return 'senior';
  }
}

export function getHashOf(plaintext: string) {
  return crypto.createHash('sha256').update(plaintext).digest('hex');
}

export function sleep(seconds: number) {
  const end = (Date.now()) + (seconds * 1000);
  while (Date.now() < end) {
    // Do nothing
  }
}
