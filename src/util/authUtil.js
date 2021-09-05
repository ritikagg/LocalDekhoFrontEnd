export class Authenticator {
  static isLoggedIn() {
    return !!localStorage.getItem("authToken");
  }

  static setToken(token) {
    return localStorage.setItem("authToken", token);
  }

  static removeToken() {
    return localStorage.removeItem("authToken", "Mobile", "isUser");
    // localStorage.removeItem("Mobile"),
    // localStorage.removeItem("isUser")
  }

  static getToken() {
    return localStorage.getItem("authToken");
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
}
