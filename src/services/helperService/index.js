import axios from "axios";

const domainURL = "http://dry-dusk-06044.herokuapp.com";

export const addNewHelperService = async (formData) => {
  console.log(formData);
  //   try {
  //     const response = await axios.post(
  //       domainURL + `/api/helpers/addNewService`,
  //       {
  //         formData: formData,
  //       }
  //     );
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
};

export const getHelpersDetails = async (helper_id) => {
  console.log(helper_id);
  // try {
  //   const response = await axios.post(
  //     domainURL + `/api/helpers/fetchHelpersDetails`,
  //     {
  //       helper_id: helper_id,
  //     }
  //   );
  //   return response;
  // } catch (error) {
  //   throw error;
  // }
  const response = {
    success: true,
    allservices: [
      {
        id: 1,
        helper_id: 1,
        service_id: 1,
        contact_number: "9306871479",
        address: "Paschim Vihar, New Delhi",
        average_charges: 500,
        additional_details: "",
        name: "Electricican",
      },
      {
        id: 2,
        helper_id: 1,
        service_id: 2,
        contact_number: "9306871480",
        address: "Karol Bagh, New Delhi",
        average_charges: 800,
        additional_details: "",
        name: "Food Delivery",
      },
      {
        id: 3,
        helper_id: 1,
        service_id: 3,
        contact_number: "9306871480",
        address: "Noida",
        average_charges: 500,
        additional_details: "",
        name: "Tuition",
      },
    ],
    allrequests: [],
  };
  return response;
};
