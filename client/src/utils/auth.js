import decode from 'jwt-decode'

class TokenService {
    login(userToken) {
        localStorage.setItem('user_token', userToken);
        window.location.assign('/');
    }
    logout() {
        localStorage.removeItem('user_token');
        window.location.assign('/');
    }
    retrieveToken() {
        return localStorage.getItem('user_token');
      }
    loggedIn() {
         const token = this.retrieveToken();
        return !!token && !this.isTokenExpired(token);
      }
    isTokenExpired(token) {
        try {
          const decoded = decode(token);
          if (decoded.exp < Date.now() / 10000) {
            return true;
          } else return false;
        } catch (err) {
          return false;
        }
      }
      getProfile() {
        return decode(this.getToken());
      }
}

export default new TokenService(); 