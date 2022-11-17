import Cookies from 'universal-cookie';

export const token = (new Cookies().get('token'))