import api from '../../../Services/api'

const get_Test_Categories = async () =>{
    const response = await api.get('ActageTypes/GetMedicalTestResultTypes')        
    return response.data    
    
}


export default get_Test_Categories;