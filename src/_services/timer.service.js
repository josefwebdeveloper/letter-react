const apiUrl = 'https://letter-to.herokuapp.com';
export const timerService = {
    getTimer
};
function getTimer() {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader()
    };

    return fetch(`${apiUrl}/timer`, requestOptions).then(handleResponse);
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        // if (!response.ok) {
        //     if (response.status === 401) {
        //         // auto logout if 401 response returned from api
        //         logout();
        //         location.reload(true);
        //     }
        //
        //     const error = (data && data.message) || response.statusText;
        //     return Promise.reject(error);
        // }

        return data;
    });
}