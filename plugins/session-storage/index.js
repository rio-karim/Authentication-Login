export function sessionStore(name, obj) {
  if (process.browser) {
    window.sessionStorage.setItem(name, JSON.stringify(obj))
  }
}
export function sessionGet(name) {
  return JSON.parse(window.sessionStorage.getItem(name))
}
