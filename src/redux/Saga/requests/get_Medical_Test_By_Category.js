import api from '../../../Services/api'

const get_Medical_Test_By_Category = async (CategoryId) =>{
    const response = await api.get('MedicalTest/GetMedicalTestByCategory', { params:{categoryId: CategoryId} })        
    return response.data
    
}


export default get_Medical_Test_By_Category;