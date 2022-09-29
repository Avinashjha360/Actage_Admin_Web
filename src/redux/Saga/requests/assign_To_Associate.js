import api from '../../../Services/api';

const assign_To_Associate =async(data)=>{
    const response  = await api.post('SubscriptionHandler/AssignSubscribersToAssociate', data)
    console.log(response)
}

export default assign_To_Associate;