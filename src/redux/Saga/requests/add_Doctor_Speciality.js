import api from '../../../Services/api'

const add_Doctor_Speciality = async (formData) =>{
    const response = await api.post('Qualification/AddQualification', formData)        
    console.log('response', response.data)
    return response
    
}


export default add_Doctor_Speciality;