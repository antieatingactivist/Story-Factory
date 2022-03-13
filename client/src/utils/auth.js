class TokenService {
    login(userToken) {
        localStorage.setItem('user_token', userToken);
        window.location.assign('/');
    }
    logout() {
        localStorage.removeItem('user_token');
        window.location.assign('/');
    }
}

export default new TokenService(); 