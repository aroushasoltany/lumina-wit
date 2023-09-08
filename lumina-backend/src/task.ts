import { getData, setData } from './dataStore';
import { badge, data, earntBadge, empty, user, task } from './types';
import HttpError from 'http-errors';

/**
 * 
 * @param date date badge is achieved
 * @param category name of badge e.g. 'diabetes'
 * @param username of the user
 * @returns empty
 */
export function earnBadge(date: Date, category: string, username: string): empty {
  const data: data = getData();
  // !! ERROR CHECK

  // get user's userType
  const users: user[] = data.users;
  const findUser: user | undefined = users.find((u) => u.username === username);
  if (findUser === undefined) {
    throw HttpError(400, 'username is not a valid user');
  }

  const userType = findUser.userType;

  // create a new badge
  const userBadge: badge = {
    username: findUser.username,
    type: userType.type, 
    category: category
  };

  // push into data badges
  data.badges.push(userBadge);

  // create new EARNT badge 
  const newBadge: earntBadge = {
    badge: userBadge,
    dateAchieved: date
  };

  // push into user's earntBadges
  findUser.badges.push(newBadge);

  // set data
  setData(data);

  return {};
}

/**
 * 
 * @param task that has been completed
 * @param username of the user 
 * @returns empty
 */
export function completeTask(task: task, username: string): empty {
  const data: data = getData();
  // ERROR CHECK
  // check user is valid
  const users: user[] = data.users;
  const findUser: user | undefined = users.find((u) => u.username === username);
  if (findUser === undefined) {
    throw HttpError(400, 'username is not a valid user');
  }
  // push their completed task into the user's completed tasks
  findUser.completedTasks.push(task);
  setData(data);
  return {};
}

/**
 * 
 * @param username of the user to list tasks
 * @returns array of their completed tasks
 */
export function getCompletedTasks(username: string): task[] {
  const data: data = getData();
  // check user exists 
  const users: user[] = data.users;
  const findUser: user | undefined = users.find((u) => u.username === username);
  if (findUser === undefined) {
    throw HttpError(400, 'username is not a valid user');
  }
  // access their completed tasks
  const tasks: task[] = findUser.completedTasks;
  return tasks;
}

export function getIncompleteTasks(username: string): task[] {
  const data: data = getData();
  // check user exists 
  const users: user[] = data.users;
  const findUser: user | undefined = users.find((u) => u.username === username);
  if (findUser === undefined) {
    throw HttpError(400, 'username is not a valid user');
  }
  // access their incompleted tasks
  const tasks: task[] = findUser.incompleteTasks;
  return tasks;
}