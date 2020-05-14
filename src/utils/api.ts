/* eslint-disable @typescript-eslint/camelcase */
import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: 'http://95.214.11.189'
})

const dataWrapper = (instance: Promise<AxiosResponse>) =>
  instance.then(({ data }) => data).catch(err => console.error(err))

const getFormData = (object) => Object.keys(object).reduce((formData, key) => {
  formData.append(key, object[key])
  return formData
}, new FormData())

const setToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.Authorization = `Token ${token}`
  }
}

const signUp = ({ username, password, isCook }: { username: string; password: string; isCook: boolean }) => {
  return dataWrapper(
    instance.post('/rest-auth/registration/', getFormData({
      username,
      password1: password,
      password2: password,
      is_cook: isCook
    }))
  )
}

const signIn = ({ username, password }: { username: string; password: string }) => {
  return dataWrapper(
    instance.post('/rest-auth/login/', getFormData({ username, password }))
  )
}

export default {
  setToken,

  signUp,
  signIn
}
