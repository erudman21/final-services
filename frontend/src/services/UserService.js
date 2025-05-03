import axios from 'axios';

class UserService {
    getUsers(){
        return axios.get('/users');
    }

    createUser(user){
        return axios.post('/users', user);
    }

    getUserById(userId){
        return axios.get('/users/' + userId);
    }

    updateUser(user, userId){
        return axios.put('/users/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete('/users/' + userId);
    }
}

export default new UserService()