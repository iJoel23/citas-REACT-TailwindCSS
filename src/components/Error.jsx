// import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Error({ children }) {
  return (
    <div className="bg-red-800 text-white text-center p-3 font-bold uppercase rounded mb-5">
      <p>{children}</p>
    </div>
  );
}

export default Error;
