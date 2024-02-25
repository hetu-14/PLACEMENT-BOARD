// import loading from "images/loading.gif";
import React from "react";
const Spinner = (props) => {
  return (
    <div className="justify-center">
      <img className="snap-center h-8 place-content-evenly" src="images/loading.gif" alt="loading" />
    </div>
  );
};

export default Spinner;
