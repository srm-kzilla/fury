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

type UpdateUser = Pick<
  User,
  "gender" | "branch" | "resume" | "contact" | "socials"
>;

type Application = {
  status: "pending" | "accepted" | "rejected";
  domain: string;
  appliedAt: Date;
  updatedAt: Date;
  questions: Array<Question>;
};

type Question = {
  question: string;
};

type NotificationType = {
  markdown: string;
  text: string;
  timestamp: Date;
};

type Activity = {
  device_ip: string;
  device_location: string;
  timestamp: Date;
  type: "login" | "add_project" | "update_project" | "delete_project";
  project_slug?: string;
  user_id: string;
};
