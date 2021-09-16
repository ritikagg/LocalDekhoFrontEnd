import React, { useState } from "react";

const AccptedTable = () => {
  const [IsExpand, setIsExpand] = useState(false);

  const expandHandler = () => {
    setIsExpand(!IsExpand);
  };
  return (
    <>
      <div onClick={expandHandler}>click me</div>
      {IsExpand && <div>Expended view</div>}
    </>
  );
};

export default AccptedTable;
