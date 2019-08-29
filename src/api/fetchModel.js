const BASE_URL = "http://127.0.0.1:5000/"

const fetchModel = async () => {
    return fetch(BASE_URL + 'model',
        {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/',
                'Access-Control-Allow-Credentials': 'true'
            }
        }
    )
        .then((response) => response.json())
        .catch((error) => error)
}

export default fetchModel