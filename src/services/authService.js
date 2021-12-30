import http from './httpService';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndpoint = apiUrl + '/auth';
const tokenKey = 'token';

http.setJwt(getJwt());

async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

async function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

function logout() {
    localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        const currentUser = jwtDecode(jwt);
        return currentUser;
    } catch (ex) {
        return null;
    }
}

function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
};