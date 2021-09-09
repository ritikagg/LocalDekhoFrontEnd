export class UserProfile {
  static setUserId(user_id) {
    return localStorage.setItem("user_id", user_id);
  }

  static getUserId() {
    return localStorage.getItem("user_id");
  }

  static removeUserId() {
    return localStorage.removeItem("user_id");
  }
}
