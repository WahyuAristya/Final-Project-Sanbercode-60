import React, { useEffect, useState } from "react";
import DataTable from "./dataTable";
import DataForm from "./dataForm";
import { getData } from "../../services/apiService";

const ManageData = () => {
  return (
    <>
      <DataTable />
      <DataForm />
    </>
  );
};

export default ManageData;
