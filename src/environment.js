const environment = {
     apiUrl : 'https://letter-to.herokuapp.com'
};
if (process.env.REACT_APP_ENV === 'development') {
    environment.apiUrl='localhost:4000'
}
if (process.env.REACT_APP_ENV === 'production') {
    environment.apiUrl='https://letter-to.herokuapp.com'
}
export default environment