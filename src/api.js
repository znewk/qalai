import axios from "axios";

const serverDomain = 'http://localhost:3030'

class API {
    getUniversities = async () => {
        const universities = await axios.get(`${serverDomain}/getUniversities/`)
        return(universities.data)
    }
    getCountries = async () => {
        const countries = await axios.get(`${serverDomain}/getCountries/`)
        return(countries.data)
    }
    getSpecializations = async () => {
        const specializations = await axios.get(`${serverDomain}/getSpecializations/`)
        return(specializations.data)
    }
    getUniversityById = async (id) => {
        const university = await axios.post(`${serverDomain}/getUniversityById/`, {id: id})
        console.log('getUniversityById api result:', university)
        return(university.data[0])
    }
    getUniversityByCountryId = async (id) => {
        const universities = await axios.post(`${serverDomain}/getUniversityByCountryId/`, {id: id})
        console.log('getUniversityByCountryId api result:', universities.data)
        return(universities.data)
    }
    getFilteredUniversities = async (data) => {
        const universities = await axios.post(`${serverDomain}/getFilteredUniversities/`, data)
        console.log('getFilteredUniversities api result:', universities.data)
        return(universities.data)
    }
}

export default API;