import React, { useEffect } from "react";
import { message } from "antd";
import AcceptedServiceCard from "./atoms/AcceptedServiceCard";
import "./acceptedservice.css";
import { useSelector, useDispatch } from "react-redux";
import { reqServiceActions } from "../../../../store/reqService/reqService-slice";
// import AccptedTable from "./molecule/AccptedTable";

const AcceptedRequest = (props) => {
  const available_service = props.acceptedSer;
  console.log(available_service);
  const reqSer = useSelector((state) => state.reqService);
  const dispatch = useDispatch();

  const groupedData = available_service.reduce(function (data, item) {
    if (item.service_name in data) {
      data[item.service_name].push(item);
    } else {
      data[item.service_name] = [];
      data[item.service_name].push(item);
    }
    return data;
  }, []);

  console.log(groupedData);
  // for (let i in groupedData) {
  //   console.log(i);
  // }

  useEffect(() => {
    dispatch(
      reqServiceActions.UPDATE_DETAILS({
        requestedService: undefined,
      })
    );

    const key = "updatable";
    if (reqSer.requestedService && reqSer.requestedService !== undefined) {
      message.loading({ content: "Hold tight...", key });
      setTimeout(() => {
        message.success({ content: "Request Sent!!", key, duration: 5 });
      }, 3000);
    }
  }, [dispatch, reqSer]);

  // const [IsExpand, setIsExpand] = useState(false);

  // const expandHandler = () => {
  //   setIsExpand(!IsExpand);
  // };

  // const column = [
  //   {
  //     average_charges: 1900,
  //     contact_number: "9306871479",
  //     created_at: "2021-09-15T13:20:59.000Z",
  //     helper_id: 1,
  //     helper_name: "Jammy",
  //     id: 27,
  //     service_id: 5,
  //     service_name: "Carpenter",
  //     service_type: null,
  //     status: "helper_accepted",
  //     updated_at: "2021-09-15T13:20:59.000Z",
  //   },
  //   {
  //     average_charges: 1900,
  //     contact_number: "9306871479",
  //     created_at: "2021-09-15T13:20:59.000Z",
  //     helper_id: 1,
  //     helper_name: "Jammy",
  //     id: 27,
  //     service_id: 4,
  //     service_name: "Mechanic",
  //     service_type: null,
  //     status: "helper_accepted",
  //     updated_at: "2021-09-15T13:20:59.000Z",
  //   },
  // ];

  return (
    <>
      {available_service.length > 0 ? (
        <div>
          <div className="page-header">All Services</div>
          <div className="services__container">
            {available_service.map((item, index) => (
              <AcceptedServiceCard
                key={index}
                id={item.id}
                service_id={item.service_id}
                user_id={item.user_id}
                helper_name={item.helper_name}
                service_name={item.service_name}
                service_type={item.ServiceType}
                // location={item.Location}
                mobile={item.contact_number}
                charges={item.average_charges}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="page-header">
          No Request Accepted yet. Please visit in sometime!!
        </div>
      )}
    </>
  );
};

export default AcceptedRequest;
