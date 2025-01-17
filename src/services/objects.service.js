import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://crm.web-hands.ru/api/v1';

class ObjectsService {
    getObjects(section) {
        return axios.get(API_URL + '/objects/list/?section=' + section, { headers: authHeader() });
    } 

    getObjectBrief(section, id) {
        return axios.get(API_URL + '/objects/brief/?section=' + section + '&id=' + id, { headers: authHeader() });
    }

    getObjectFields(section, id) {
        return axios.get(API_URL + '/objects/fields/?section=' + section + '&id=' + id, { headers: authHeader() });
    }

    updateObject(data) {
        console.log("data", data);
    
        const fd = new FormData();
        fd.append('id', data.id);
        fd.append('section', data.section);
    
        for (const [key, value] of Object.entries(data.fields)) {
            fd.append(`fields[${key}]`, value);
        }
    
        const url = `${API_URL}/objects/save/`;
    
        // Do not set 'Content-Type' header when using FormData
        const headers = {
            ...authHeader(),
        };
    
        return axios.post(url, fd, { headers })
            .then(response => {
                // Handle the response here
                console.log('Response:', response.data);
                return response.data;
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
                throw error; // Propagate the error further if needed
            });
    }
    
}

export default new ObjectsService();