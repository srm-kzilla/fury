function isBrowser() {
  return typeof window !== "undefined";
}

let isEnvValidated = false;

function getEnv() {
  if (!isEnvValidated) validateEnv();
  return isBrowser() ? window.ENV : process.env;

}

function validateEnv() {
  if (!isBrowser() && !isEnvValidated) {
    const env = process.env;

    const envObject = {
      API_BASE_URL: env.API_BASE_URL,
      APPLICATION_DEADLINE: env.APPLICATION_DEADLINE,
      OAUTH_REDIRECT_URI: env.OAUTH_REDIRECT_URI,
      OAUTH_CLIENT_ID: env.OAUTH_CLIENT_ID,
      LANDING_PAGE_URL: env.LANDING_PAGE_URL,
      RECAPTCHA_SITE_KEY: env.RECAPTCHA_SITE_KEY,
    };

    let key: keyof typeof envObject;
    for (key in envObject) {
      if (
        envObject[key] === undefined ||
        envObject[key] === "" ||
        envObject[key] === null
      ) {
        throw new Error(`Environment variable ${key} is missing in .env`);
      }
    }
  }
}

export default getEnv;
