import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/persons'
})

const personService = {
  get: () => {
    const request = api.get()
    return request.then(response => response.data)
  },
  create: (person) => {
    const request = api.post('', person)
    return request.then(response => response.data)
  },
  update: (id, person) => {
    const request = api.put(`/${id}`, person)
    return request.then(response => response.data)
  },
  delete: (id) => {
    const request = api.delete(`/${id}`)
    return request.then(response => response.data)
  }
}

export { personService }