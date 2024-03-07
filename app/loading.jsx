"use client";
import ClipLoader from "react-spinners/ClipLoader";

const override = { display: "block", margin: "100px auto" };

const Loading = ({ loading, ovveride }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <ClipLoader
        color={"#3b82f6"}
        loading={loading}
        size={150}
        cssOverride={override}
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loading;
