export class HelperProfile {
  static setHelperId(helper_id) {
    return localStorage.setItem("helper_id", helper_id);
  }

  static getHelperId() {
    return localStorage.getItem("helper_id");
  }

  static removeHelperId() {
    return localStorage.removeItem("helper_id");
  }
}
