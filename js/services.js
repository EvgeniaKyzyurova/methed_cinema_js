const API_KEY = 'be47cd799720ba73a21a5f238189d699';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';
//trending/all/day?api_key=<<api_key>>

const getData = url =>fetch(url)
    .then(response => {
        if (response.ok){
            return response.json()
        }
        throw `Something went wrong ${response.status}`
    })
    .catch(err => console.error(err));

export const getTriends = async (type = 'all', period = 'day', page = 1) =>{
    const url =`${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};