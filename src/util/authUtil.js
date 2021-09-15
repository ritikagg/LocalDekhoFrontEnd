export class Authenticator {
  static isLoggedIn() {
    return !!localStorage.getItem("authToken");
  }

  static setToken(token) {
    return localStorage.setItem("authToken", token);
  }

  static getToken() {
    return localStorage.getItem("authToken");
  }

  static removeToken() {
    return localStorage.clear();
    // localStorage.removeItem("authToken"),
    // localStorage.removeItem("Mobile"),
    // localStorage.removeItem("isUser")
  }

  static setMobile(mobile) {
    return localStorage.setItem("Mobile", mobile);
  }

  static setIsUser(isUser) {
    return localStorage.setItem("isUser", isUser);
  }

  static getIsUser() {
    return localStorage.getItem("isUser") === "true";
  }

  static getMobile() {
    return localStorage.getItem("Mobile");
  }
}
