import axios from 'axios'

const api = 'http://localhost:4000'

class HomeService {
  uploadFile (file: any) {
    const formData = new FormData()
    formData.append('file', file, file.name)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return axios.post(`${api}/upload`, formData, config)
  }

  getAll () {
    return fetch(`${api}/upload/all`).then(res => res.json())
  }

  getById (id:string) {
    return fetch(`${api}/upload/${id}`).then(res => res.json())
  }

  deleteById (id:string) {
    return axios.delete(`${api}/upload/${id}`)
  }
}

// Export a singleton instance in the global namespace
export const homeService = new HomeService()
