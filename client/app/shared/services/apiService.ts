import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API } from "~/constants";
import { getRecaptchaToken } from "../utils/recaptcha";

/**
 * Drives a database connection in a singleton.
 */
export class APIService {
  private static _instance: APIService;
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API.BASE_URL,
    });
    this.instance.defaults.timeout = 60000;

    this.instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (!!error) {
          const originalRequest = error.config;
          if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
          ) {
            originalRequest._retry = true;
            return this.instance
              .post("/auth/google/refresh", {
                refresh_token: localStorage.getItem("refresh_token"),
              })
              .then((res) => {
                // 1) put token to LocalStorage
                // localStorageService.setToken(res.data);
                res &&
                  localStorage.setItem("access_token", res.data.access_token);
                // 2) Change Authorization header
                axios.defaults.headers.common["Authorization"] =
                  "Bearer " + localStorage.getItem("access_token");

                // 3) return originalRequest object with Axios.
                return axios(originalRequest);
              });
          }
        }
      },
    );

    this.instance.interceptors.request.use(
      async (config) => {
        if (
          [
            "post",
            "put",
            "delete",
            "POST",
            "PUT",
            "DELETE",
            "get",
            "GET",
          ].includes(config.method!)
        ) {
          const token = await getRecaptchaToken("action");
          config.headers["x-recaptcha-token"] = token;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    this.instance.interceptors.response.use(
      async (response: AxiosResponse) => {
        return response;
      },
      async (error) => {
        if (error?.response?.status === 503) {
          window.location.reload();
        }
        throw error;
      },
    );
  }

  /**
   * The static method that controls the access to the APIService instance.
   */
  public static getInstance(): APIService {
    if (!APIService._instance) {
      APIService._instance = new APIService();
    }

    return APIService._instance;
  }

  async exchangeAccessToken(code: string) {
    return this.instance.post(
      API.ENDPOINTS.AUTH.BASE_URL() + API.ENDPOINTS.AUTH.EXCHANGE_TOKEN(),
      {
        code,
      },
    );
  }

  async fetchUserInfo() {
    return this.instance.get(API.ENDPOINTS.USERS.BASE_URL());
  }

  async fetchUserActivity() {
    return this.instance.get(
      API.ENDPOINTS.USERS.BASE_URL() + API.ENDPOINTS.USERS.ACTIVITY(),
    );
  }

  async fetchUserNotifications() {
    return this.instance.get(
      API.ENDPOINTS.USERS.BASE_URL() + API.ENDPOINTS.USERS.NOTIFICATIONS(),
    );
  }

  async fetchUserProjects(slug?: string) {
    return this.instance.get(
      API.ENDPOINTS.USERS.BASE_URL() + API.ENDPOINTS.USERS.PROJECTS(slug),
    );
  }

  async fetchAllProjects() {
    return this.instance.get(API.ENDPOINTS.PROJECTS.BASE_URL());
  }

  async submitUserInfo(values: any) {
    return this.instance.put(API.ENDPOINTS.USERS.BASE_URL(), values);
  }

  async createProjects(values: any) {
    return this.instance.post(API.ENDPOINTS.PROJECTS.CREATE(), values);
  }

  async updateUserProject(values: any, project_slug?: string) {
    const { status, track, domain, color, deleted, ...project } = values;
    return this.instance.put(API.ENDPOINTS.PROJECTS.SUBMIT(), project);
  }

  async fetchSkillsOptions(value?: string) {
    return this.instance.get(API.ENDPOINTS.DATA.SKILLS(), {
      params: { q: value },
    });
  }

  async fetchGitHubRepository(repo?: string) {
    return this.instance.get(
      API.ENDPOINTS.USERS.BASE_URL() + API.ENDPOINTS.USERS.REPOS(),
      {
        params: { q: repo },
      },
    );
  }

  async getBlobURL(formData: any) {
    return this.instance.post(API.ENDPOINTS.PROJECTS.BLOB(), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async deleteUserProject(slug: string) {
    return this.instance.delete(
      API.ENDPOINTS.USERS.BASE_URL() + API.ENDPOINTS.USERS.DELETE_PROJECT(),
      {
        params: {
          project_slug: slug,
        },
      },
    );
  }

  async projectCheckIn(slug: string) {
    return this.instance.post(
      API.ENDPOINTS.USERS.CHECK_IN(slug),
      {},
      {
        params: {
          project_slug: slug,
        },
      },
    );
  }

  async fetchHeadline() {
    return this.instance.get(API.ENDPOINTS.HEADLINE());
  }

  async scheduleInterview(slug: string, start: string) {
    return this.instance.post(API.ENDPOINTS.INTERVIEWS.SCHEDULE_INTERVIEW(), {
      slug,
      start,
    });
  }

  async getInterview(id: string) {
    return this.instance.get(API.ENDPOINTS.INTERVIEWS.GET_INTERVIEW(id));
  }

  async getInterviewSlots(domain: string) {
    return this.instance.get(API.ENDPOINTS.INTERVIEWS.GET_INTERVIEW_SLOTS(), {
      params: { domain },
    });
  }

  //v2

  async fetchApplications() {
    return this.instance.get(API.ENDPOINTS.APPLICATIONS.BASE_URL());
  }

  async addApplication(formData: any) {
    return this.instance.post(
      API.ENDPOINTS.APPLICATIONS.BASE_URL() +
        API.ENDPOINTS.APPLICATIONS.CREATE(),
      formData,
    );
  }

  async getApplicationBySlug(slug: string) {
    return this.instance.get(
      API.ENDPOINTS.APPLICATIONS.BASE_URL() +
        API.ENDPOINTS.APPLICATIONS.SINGLE_APPLICATION(slug),
    );
  }

  async getAccessToken(code: string) {
    return this.instance.post(
      API.ENDPOINTS.AUTH.BASE_URL() + API.ENDPOINTS.AUTH.ACCESS_TOKEN(),
      {},
      { params: { code: code } },
    );
  }
}
