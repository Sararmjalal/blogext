import Cookies from 'universal-cookie';

export default `ut ${(new Cookies()).get('token')}`