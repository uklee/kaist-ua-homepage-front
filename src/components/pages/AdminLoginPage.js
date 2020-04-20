import React from "react";

import { AdminLoginContent } from "../templates";

const AdminLoginPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        // backgroundColor: "#eee",
        fontFamily: "NanumSquare"
      }}
      className="d-flex align-items-center"
    >
      <AdminLoginContent />
    </div>
  );
};

export default AdminLoginPage;
