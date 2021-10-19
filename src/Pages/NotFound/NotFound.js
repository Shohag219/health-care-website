import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="error-bg">
      <h1 className="text-danger mt-5 mb-5">Page Not Found</h1>
      <img
        src="http://skilify.theuxuidesigner.com/images/webp/page404.webp"
        alt=""
      />
    </div>
  );
};

export default NotFound;
