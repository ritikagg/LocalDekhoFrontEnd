import axios from "axios";

const domainURL = `https://localdekhobackend.herokuapp.com`;
// const domainURL = `http://localhost:5000`;

export const AddressDetailsAPI = async (lat, lng) => {
  try {
    const uri = domainURL;
    const response = await axios.post(uri + `/api/getAddressLine`, {
      params: {
        lat: lat,
        lng: lng,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
