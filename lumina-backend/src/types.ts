// Data storage
  // object of arrays of objects
export type data = {
  users: user[],
  badges: badge[],
  userTypes: userType[],
  tokens: token[]
};

// User of app
// !! possibly remove the isolated 'username'
export type user = {
  username: string,
  email: string,
  nameFirst: string,
  nameLast: string,
  password: string,
  badges: earntBadge[],
  dob: Date, // need to install
  gender: string,
  medicalInfo: medicalDataType,
  completedTasks: task[],
  incompleteTasks: task[],
  userType: userType
};

// Badge
// name = user type
// category = name
export type badge = {
  username: string,
  type: string,
  category: string
};

// userType package e.g. teen
// !! could consider removing tasks
export type userType = {
  username: string,
  type: string,
  tasks: task[]
};

// badges earnt by the user and stored as their own
export type earntBadge = {
  badge: badge,
  dateAchieved: Date
};

// medical information
export type medicalDataType = {
  asthma: boolean,
  diabetes_1: boolean,
  diabetes_2: boolean,
  hypertension: boolean,
  cardiovascular: boolean,
  obesity: boolean,
  cancer: boolean
};

// tasks that are either in/complete
// acts as a tracker
export type task = {
  name: string,
  badge: badge,
  pageURL: string
};

export type token = {
  token: string,
  username: string
};

export type empty = Record<string, never>;