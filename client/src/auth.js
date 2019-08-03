import axios from 'axios';

export function getSignatureObject() {
  const out = {};
  out.signature = localStorage.getItem('cascade-signature');
  out.userId = localStorage.getItem('cascade-userId');
  out.timeframe = parseInt(localStorage.getItem('cascade-timeframe'), 10);
  out.creation = parseInt(localStorage.getItem('cascade-creation'), 10);
  out.clientCreation = parseInt(localStorage.getItem('cascade-clientCreation'), 10);
  return out;
}

export async function generateNewSignature() {
  const response = await axios({
    method: 'get',
    url: process.env.VUE_APP_API_GETTOKEN,
    withCredentials: true,
  });
  localStorage.setItem('cascade-signature', response.data.signature);
  localStorage.setItem('cascade-userId', response.data.userID);
  localStorage.setItem('cascade-timeframe', response.data.timeframe);
  localStorage.setItem('cascade-creation', response.data.creation);
  localStorage.setItem('cascade-clientCreation', new Date().getTime());
}

export async function isAuthenticated() {
  const response = await axios({
    method: 'get',
    url: process.env.VUE_APP_API_ME,
    withCredentials: true,
  });
  return response.status === 200;
}

export function isSignatureValid() {
  const signature = getSignatureObject();
  if (signature && (signature.clientCreation
    + signature.timeframe) <= new Date().getTime()) {
    return false;
  }
  return true;
}
