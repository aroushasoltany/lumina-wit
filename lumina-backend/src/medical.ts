import { getData, setData } from './dataStore';
import HttpError from 'http-errors';
import { medicalDataType, user, data } from './types';

/**
 * 
 * @param medicalDataType an object with user's medical history
 * @param username of the user changing data
 * @returns the user's updated object of medical history
 */
export function setMedicalInfo(medicalDataType: medicalDataType, username: string): medicalDataType {
  const data: data = getData();
  // check user exists 
  const users: user[] = data.users;
  const findUser: user | undefined = users.find((u) => u.username === username);
  if (findUser === undefined) {
    throw HttpError(400, 'username is not a valid user');
  }
  // set new data
  findUser.medicalInfo = medicalDataType;
  const userInfo = findUser.medicalInfo;
  setData(data);
  return userInfo;
}

/**
 * 
 * @param username of the user
 * @returns medical information of the user
 */
export function getMedicalInfo(username: string): medicalDataType {
  const data: data = getData();
  // check user exists 
  const users: user[] = data.users;
  const findUser: user | undefined = users.find((u) => u.username === username);
  if (findUser === undefined) {
    throw HttpError(400, 'username is not a valid user');
  }
  const medicalData = findUser.medicalInfo;
  return medicalData;
}