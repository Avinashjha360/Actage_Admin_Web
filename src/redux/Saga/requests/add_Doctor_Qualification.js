import api from '../../../Services/api'

const add_Doctor_Qualification = async (formData) =>{
    const response = await api.post('Specialization/AddSpecialization', formData)        
    console.log('response', response.data)
    return response
    
}


export default add_Doctor_Qualification;