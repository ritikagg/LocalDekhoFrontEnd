export class Authenticator {
	static isLoggedIn() {
		return !!localStorage.getItem("authToken");
	}

	static setToken(token) {
		return localStorage.setItem("authToken", token);
	}

	static removeToken() {
		return localStorage.removeItem("authToken");
	}

	static getToken() {
		return localStorage.getItem("authToken");
	}
}
