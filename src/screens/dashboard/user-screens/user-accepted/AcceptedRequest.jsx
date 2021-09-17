import React, { useEffect } from "react";
import { message } from "antd";
import "./acceptedservice.css";
import { useSelector, useDispatch } from "react-redux";
import { reqServiceActions } from "../../../../store/reqService/reqService-slice";
import { uniqBy } from "lodash";
import Groupedcard from "./atoms/GroupedCard";
import { useLocation } from "react-router-dom";

const AcceptedRequest = () => {
  const { search } = useLocation();

  const searchParam = new URLSearchParams(search);

  const allRequest = useSelector((state) => state.user.allRequest);

  let available_service = useSelector((state) => state.user.acceptedRequest);
  let pendingRequest = allRequest.filter((i) => i.status === "pending");

  const uniqAccpetedServiceList = uniqBy(available_service, "service_name").map(
    (i) => i.service_name
  );

  pendingRequest = pendingRequest.filter(
    (i) => !uniqAccpetedServiceList.includes(i.service_name)
  );

  const q = searchParam.get("q");
  available_service = available_service.filter((item) => {
    return q
      ? item.service_name.toLowerCase().indexOf(q.toLowerCase()) >= 0
      : true;
  });

  pendingRequest = pendingRequest.filter((item) => {
    return q
      ? item.service_name.toLowerCase().indexOf(q.toLowerCase()) >= 0
      : true;
  });

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
  }, {});

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
      {available_service.length + pendingRequest.length > 0 ? (
        <div>
          <div className="page-header">All Request</div>
          <div className="services__container">
            {Object.entries(groupedData).map((item) => (
              <Groupedcard
                count={item[1].length}
                service_name={item[0]}
                cardType="accepted"
                status="Intrested"
              />
            ))}
            {uniqBy(pendingRequest, "service_name").map((item) => (
              <Groupedcard
                count={0}
                service_name={item.service_name}
                cardType="pending"
                status="Waiting"
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
