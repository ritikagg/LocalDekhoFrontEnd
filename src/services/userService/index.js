import axios from "axios";

// const domainURL = `https://localdekhobackend.herokuapp.com`;
const domainURL = `http://localhost:5000`;

export const getUserDetails = async (user_id) => {
  try {
    const response = await axios.post(
      domainURL + `/api/users/fetchUsersDetails`,
      {
        user_id: user_id,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// On action to accept or decline request
export const updateServiceStatus = async (id, action) => {
  try {
    const response = await axios.put(domainURL + `/api/users/updateService`, {
      id: id,
      action: action,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// On action to create a new service request
export const requestNewService = async (
  user_id,
  service_id,
  user_name,
  location,
  postal_code
) => {
  try {
    const response = await axios.post(domainURL + `/api/users/requestService`, {
      user_id: user_id,
      service_id: service_id,
      user_name: user_name,
      location: location,
      pin_code: postal_code,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
