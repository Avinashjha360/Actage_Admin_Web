import api from '../../../Services/api';

const delete_Medical_Test =async(id)=>{
    console.log(id)
    const response = await api.post('MedicalTest/DeleteMedicalTest', {'uid': id})
    return response;
}

export default delete_Medical_Test;