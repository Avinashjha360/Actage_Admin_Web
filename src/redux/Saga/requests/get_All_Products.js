import api from '../../../Services/api';

const get_All_Products =async()=>{
    const response = await api('Product/GetAllProducts');
    console.log(response.data.data)
    return response.data.data
}

export default get_All_Products;