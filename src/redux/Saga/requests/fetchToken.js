import axios from 'axios';

const { REACT_APP_BASEURL } = process.env;

const fetchToken = async (credentials) =>{
    const response = await axios.post(REACT_APP_BASEURL + 'Auth/InternalUserLogin', credentials)        
    // console.log('response', response.data.data.token)
    return response.data.data
    
}


export default fetchToken;