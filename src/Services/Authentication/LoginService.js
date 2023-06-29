import axios from 'axios';
import BACKEND_URL from '../../Config/WebConfig';
axios.defaults.WebConfig = BACKEND_URL;

function login(data) {
  //make api call for auth
  console.log('Data: ' + data.email + ' and password: ' + data.password);
  return axios.post('/api/login', data);
}

export default { login };
