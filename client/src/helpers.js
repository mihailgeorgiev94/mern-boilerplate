export const getToken = () => {
  return localStorage.getItem('jwttoken');
}

export const setToken = (jwttoken) => {
  return !localStorage.setItem('jwttoken', jwttoken);
}

export const logout = () => {
  return !localStorage.removeItem('jwttoken');
}

// refresh token can also be added here
export const client = (endpoint, {body, ...customConfig} = {}) => {
  const token = getToken()
  const headers = {'content-type': 'application/json'}

  if (token) {
     headers.Authorization = token
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }

  // .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
  return window
    .fetch(endpoint, config)
    .then(async response => {
      if (response.status === 401) {
        logout()
        window.location.assign(window.location)
        return
      }
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}
