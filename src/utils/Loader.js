import React from "react";

const Loader = () => {
  return (
    <div
      className="loader-container bg-black/45"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-amber-500 animate-spin absolute"></div>
    </div>
  );
};

export default Loader;
