import axios from 'axios';
import { getApiUrl } from '../config';
class UserService {
    getBaseUrl() {
        return getApiUrl() + '/users';
    }

    getUsers(){
        return axios.get(this.getBaseUrl());
    }

    createUser(user){
        return axios.post(this.getBaseUrl(), user);
    }

    getUserById(userId){
        return axios.get(this.getBaseUrl() + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(this.getBaseUrl() + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(this.getBaseUrl() + '/' + userId);
    }
}

export default new UserService()