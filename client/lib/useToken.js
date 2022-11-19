import Cookies from 'universal-cookie';

export default function useToken() {
  const token = (new Cookies()).get('token')
  return token ? token : null  
}