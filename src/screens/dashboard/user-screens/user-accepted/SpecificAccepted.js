import React, { useEffect } from "react";
import { Breadcrumb, message } from "antd";
import AcceptedServiceCard from "./atoms/AcceptedServiceCard";
import "./acceptedservice.css";
import { useSelector, useDispatch } from "react-redux";
import { reqServiceActions } from "../../../../store/reqService/reqService-slice";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const SpecificAccepted = () => {
  const routeMatch = useRouteMatch();

  const available_service = useSelector((state) => state.user.acceptedRequest);
  const reqSer = useSelector((state) => state.reqService);
  const dispatch = useDispatch();

  const groupedData = available_service.filter((item) => {
    return (
      item.service_name.toLowerCase() === routeMatch.params.cat.toLowerCase()
    );
  });

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

  return (
    <>
      {groupedData.length > 0 ? (
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={"/dashboard/accepted"}> All Servcies</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{groupedData[0].service_name}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="services__container">
            {groupedData.map((item, index) => (
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

export default SpecificAccepted;
