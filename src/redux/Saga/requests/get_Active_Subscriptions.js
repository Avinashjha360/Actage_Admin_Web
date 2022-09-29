import api from '../../../Services/api'
import axios from 'axios';

const get_Active_Subscriptions = async () => {    
    const requestOne = api.get("Subscription/GetActiveSubscriptions");
    const requestTwo = api.get('InternalUser/GetInternalUserUserByRole', {params: {roleName: 'Associate'}});

    const [res1, res2] =  await axios.all([requestOne, requestTwo])

    return {ActiveSubscriptions: res1.data.data.results, InternalUserUser:res2.data.data.results}
}

export default get_Active_Subscriptions;