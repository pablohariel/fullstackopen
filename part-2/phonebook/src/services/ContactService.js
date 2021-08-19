import axios from 'axios'

const api = axios.create({
  baseURL: '/api/contacts'
})

const contactService = {
  get: () => {
    const request = api.get()
    return request.then(response => response.data)
  },
  create: (contact) => {
    const request = api.post('', contact)
    return request.then(response => response.data)
  },
  update: (id, contact) => {
    const request = api.put(`/${id}`, contact)
    return request.then(response => response.data)
  },
  delete: (id) => {
    const request = api.delete(`/${id}`)
    return request.then(response => response.data)
  }
}

export { contactService }