import React, { useState, useEffect } from "react";
import ServiceCard from "./atoms/ServiceCard";
import FloatingActionButtons from "../../../../components/fab/Fab";
import AddService from "./molecule/AddServiceForm";
import { Modal, notification } from "antd";
import useGeolocation from "react-hook-geolocation";
import { useDispatch } from "react-redux";
import { reqServiceActions } from "../../../../store/reqService/reqService-slice";
import { useLocation } from "react-router-dom";

const AllServices = ({ props }) => {
  const { search } = useLocation();

  const searchParam = new URLSearchParams(search);

  const availale_service = props;

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const geolocation = useGeolocation();
  const lat = geolocation.latitude;
  const lng = geolocation.longitude;
  useEffect(() => {
    if (!geolocation.error) {
      dispatch(
        reqServiceActions.UPDATE_LATLNG({
          latitude: lat,
          longitude: lng,
        })
      );
    } else {
      notification.error({
        message: "Unable to access location",
        description: "Please provide location access to serve better.",
      });
    }
  }, [dispatch, lat, lng, geolocation.error]);

  const q = searchParam.get("q");
  const filtered = availale_service.filter((item) => {
    return q ? item.name.toLowerCase().indexOf(q.toLowerCase()) >= 0 : true;
  });

  return (
    <>
      {availale_service.length > 0 ? (
        <div>
          <h2 className="page-header">All Services</h2>

          <div className="card__body">
            {q && filtered.length === 0 && <h1>No results found</h1>}
            {filtered.map((item, index) => (
              <ServiceCard
                key={index}
                service_name={item.name}
                service_type=""
                location={item.address}
                mobile={item.contact_number}
                charges={item.average_charges}
              />
            ))}
          </div>

          <FloatingActionButtons handle={setVisible} />
          <Modal
            // title="Modal 1000px width"
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={700}
            footer={null}
          >
            <AddService onClose={onClose} />
          </Modal>
        </div>
      ) : (
        <h2>No Service added yet. Please create some...</h2>
      )}
    </>
  );
};

export default AllServices;
