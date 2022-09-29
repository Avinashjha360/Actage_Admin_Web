import api from '../../../Services/api'

const get_Test_Categories = async () =>{
    const response = await api.get('TestCategory/GetTestCategories')        
    return response.data    
    
    // const [firstResponse] = await Promise.all([
    //     api.get('TestCategory/GetTestCategories')        
    //   ]);

    //   const thirdResponse = await api.get('MedicalTest/GetMedicalTestByCategory', { params:{categoryId: firstResponse.data.data[1].id} })
    //   console.log(firstResponse.data.data)
    //   console.log(thirdResponse)
    //   return {firstResponse, thirdResponse }

}


export default get_Test_Categories;