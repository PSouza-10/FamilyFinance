export const setItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value))
}
export const getItem = name => {
  return JSON.parse(localStorage.getItem(name)) || null
}
