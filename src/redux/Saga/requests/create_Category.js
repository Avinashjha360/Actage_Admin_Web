import api from '../../../Services/api'

const create_Category = async (categoryData) =>{
    const response = await api.post('TestCategory/AddTestCategory', categoryData)        
    console.log('response==>>', response.data)
    return response.data
    
}


export default create_Category;