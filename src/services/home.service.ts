import axios from 'axios';

const api = "http://localhost:4000";

class HomeService {
    uploadFile(file: any) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        console.log("here",`${api}/upload`)
        return axios.post(`${api}/upload`, formData, config);
    }
}

// Export a singleton instance in the global namespace
export const homeService = new HomeService();