import React from "react";

const Popover = () => {
  const ref = React.useRef();

  return (
    <div className="popover" ref={ref}>
      Popover
    </div>
  );
};

export default Popover;
