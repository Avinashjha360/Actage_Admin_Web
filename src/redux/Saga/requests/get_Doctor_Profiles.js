import api from '../../../Services/api'

const get_Doctor_Profiles = async () => {
    try {
        const response = await api.get('Doctor/profile/GetProfile')
        return response;
    } catch (error) {
        return error;
    }
}

export default get_Doctor_Profiles;