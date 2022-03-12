import axios from "axios";

class API {
    getUniversities = async () => {
        const universities = await axios.get(`http://localhost:3030/getUniversities/`)
        return(universities.data)
    }
    getUniversityById = async (id) => {
        const university = await axios.post(`http://localhost:3030/getUniversityById/`, {id: id})
        console.log('getUniversityById api result:', university)
        return(university.data[0])
    }
    getUniversityByCountryId = async (id) => {
        const universities = await axios.post(`http://localhost:3030/getUniversityByCountryId/`, {id: id})
        console.log('getUniversityByCountryId api result:', universities.data)
        return(universities.data)
    }
}

export default API;