type User = {
  _id: string;
  regNo: string;
  name: string;
  year: number;
  email: string;
  gender?: string;
  branch?: string;
  resume?: string;
  contact?: string;
  createdAt: Date;
  application: Array<Application>;
  socials: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
};

type UpdateUser = Pick<User, "gender"|"branch"|"resume"|"contact"|"socials">

// TODO: define once API is ready
type Application = {};

type NotificationType = {
  markdown: string;
  text: string;
  timestamp: Date;
};
