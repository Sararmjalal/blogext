import Cookies from 'universal-cookie';

export default function setToken(token) {
  (new Cookies()).set('token', `ut ${token}`, {path: '/'})
} 