import React from "react";
import PendingCard from "./atoms/PendingCard";

const PendingRequest = ({ props }) => {
  const availale_service = props;
  return (
    <div>
      <h2 className="page-header">All Services</h2>
      {/* <div className="row"> */}
      {/* <div className="col-12">
          <div className="card"> */}
      <div className="pr_card__body">
        {availale_service.map((item, index) => (
          <PendingCard
            key={index}
            user_name={item.user_name}
            service_name={item.service_name}
            location={item.user_address}
            mobile={item.user_mobile}
            request_timeslot={item.request_timeslot}
          />
        ))}
      </div>
      {/* </div>
        </div> */}
      {/* </div> */}
      {/* <FloatingActionButtons handle={setVisible} />
      <Modal
        // title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
      >
        <AddService onClose={onClose} />
      </Modal> */}
    </div>
  );
};

export default PendingRequest;
