import axios from "axios";

const getAddress = async (lat, lng) => {
  try {
    const url = `https://www.swiggy.com/dapi/misc/reverse-geocode?latlng=${lat}%2C${lng}`;
    const info = await axios.get(url);
    console.log(info);
    return info;
  } catch (e) {
    console.log(e);
  }
  // return info.data[0].formatted_address;
};

export default {
  getAddress,
};
