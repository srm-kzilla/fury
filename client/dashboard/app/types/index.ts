type User = {
  _id: string;
  regNo: string;
  name: string;
  year: number;
  email: string;
  gender: string;
  resume: string;
  contact: string;
  createdAt: Date;
  application: Array<Application>;
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
};

// TODO: define once API is ready
type Application = {};
