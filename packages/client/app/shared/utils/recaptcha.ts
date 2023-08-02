import { load } from "recaptcha-v3";

export async function getRecaptchaToken(action: string) {
  const siteKey = "6LdxH8cZAAAAAI12hm-k-NZL7SOXmnjSJ_SHrBP6";
  const recaptcha = await load(siteKey);
  const token = await recaptcha.execute(action);

  return token;
}
