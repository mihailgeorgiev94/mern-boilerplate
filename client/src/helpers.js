export const isAuthenticated = () => {
  return localStorage.getItem('jwttoken');
}

export const authenticate = (jwttoken) => {
  return !localStorage.setItem('jwttoken'. jwttoken);
}

export const logout = () => {
  return !localStorage.removeItem('jwttoken');
}
