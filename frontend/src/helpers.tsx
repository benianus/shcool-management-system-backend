export function isRoute(route: string, location: Location) {
  return location.pathname.startsWith(route);
}

export function saveTokenOnLocalStorage(key: string, token: string): void {
  localStorage.setItem(key, token);
}

export function getTokenFromLocalStorage(
  key: string,
  token: string
): boolean | (() => boolean) {
  return localStorage.getItem(key) === token;
}

export function clearLocalStorage(): void {
  localStorage.clear();
}
