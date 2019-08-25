import axios from 'axios';

export function getTokenObject() {
  const out = {};
  out.token = localStorage.getItem('cascade-token');
  out.expiry = parseInt(localStorage.getItem('cascade-expiry'), 10);
  return out;
}

export async function generateNewToken() {
  const response = await axios({
    method: 'get',
    url: process.env.VUE_APP_API_GETTOKEN,
    withCredentials: true,
  });
  localStorage.setItem('cascade-token', response.data.token);
  localStorage.setItem('cascade-expiry', new Date().getTime() + response.data.expiresIn * 60);
}

export async function isAuthenticated() {
  const response = await axios({
    method: 'get',
    url: process.env.VUE_APP_API_ME,
    withCredentials: true,
  });
  return response.status === 200;
}

export function isTokenValid() {
  const tokenObject = getTokenObject();
  if (!tokenObject || !tokenObject.token || !tokenObject.expiry) {
    return false;
  }
  if (tokenObject && tokenObject.expiry <= new Date().getTime()) {
    return false;
  }
  return true;
}
