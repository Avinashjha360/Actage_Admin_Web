import api from '../../../Services/api'

const add_Medical_Test = async (userData) =>{
    const response = await api.post('MedicalTest/AddMedicalTest', userData)        
    console.log('response', response.data)
    return response.data
    
}


export default add_Medical_Test;