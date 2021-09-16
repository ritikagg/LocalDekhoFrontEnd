import axios from "axios";

const domainURL = `https://localdekhobackend.herokuapp.com`;
// const domainURL = `http://localhost:5000`;

export const addNewHelperService = async (data, name) => {
  try {
    const response = await axios.post(
      domainURL + `/api/helpers/addNewService`,
      {
        formData: data,
        name: name,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getHelpersDetails = async (helper_id) => {
  try {
    const response = await axios.post(
      domainURL + `/api/helpers/fetchHelpersDetails`,
      {
        helper_id: helper_id,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateServiceStatus = async (id, action) => {
  try {
    const response = await axios.put(domainURL + `/api/helpers/updateService`, {
      id: id,
      action: action,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const editHelperService = async (data, helper_id, service_id) => {
  try {
    const response = await axios.put(domainURL + `/api/helpers/editService`, {
      updateData: data,
      helper_id: helper_id,
      service_id: service_id,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
