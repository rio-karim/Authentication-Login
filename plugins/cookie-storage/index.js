export function cookieStore(name, value, days) {
  if (process.client) {
    let expires = ''
    if (days) {
      const date = new Date()
      const daysMs = days * 24 * 60 * 60 * 1000
      date.setTime(date.getTime() + daysMs)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  }
}
export function cookieGet(name) {
  if (process.client) {
    const nameEQ = name + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return false
  }
}
export function cookieDelete(name) {
  if (process.client && cookieGet(name)) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}

export function userLogout() {
  if (process.client) {
    console.log('attempting logout')
    cookieStore('logged.out', 'true', 1)
    cookieDelete('auth._token.local')
    window.location.reload()
  }
}
