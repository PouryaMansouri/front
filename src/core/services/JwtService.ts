const ID_ACCESS_TOKEN_KEY = "kjjhf&^5hgyd5" as string;
const ID_REFRESH_TOKEN_KEY = "fdz453w6tFd54" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_ACCESS_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveAccessToken = (token: string): void => {
  window.localStorage.setItem(ID_ACCESS_TOKEN_KEY, token);
};

export const saveRefreshToken = (token: string): void => {
  window.localStorage.setItem(ID_REFRESH_TOKEN_KEY, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(ID_REFRESH_TOKEN_KEY);
};

export default { getToken, saveAccessToken, saveRefreshToken, destroyToken };
