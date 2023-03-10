import React from "react";
import MaterialReactTable from "material-react-table";
import { Box } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DataTable = ({ data }) => {
  const columns = [
    {
      accessorKey: "firstName",
      header: "First Name",
      size: 160,

    },
    {
      accessorKey: "middleName",
      header: "Middle Name",
      size: 160,

    },
    {
      accessorKey: "lastName",
      header: "Last Name",
      size: 160,

    },
    {
      accessorKey: "nationalId",
      header: "National ID",
    },
    {
      accessorKey: "phone",
      header: "Phone",
      size: 150,
    },
    {
      accessorKey: "email",
      header: "Email",
      size: 230,
    },
    {
      accessorKey: "county",
      header: "County",
      size: 160,
    },
    {
      accessorKey: "signature",
      header: "Signature",
      size: 100,
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={data ?? []}
      enableRowSelection
      positionToolbarAlertBanner="bottom"
      renderTopToolbarCustomActions={({ table }) => (
        <Box
          sx={{ display: "flex", gap: "1rem", p: "0.5rem", flexWrap: "wrap" }}
        >
          <button
            startIcon={<FileDownloadIcon />}
            className="text-sm bg-[#3b76ef] text-white py-2 px-3 rounded hover:opacity-90"
          >
            Export CSV
          </button>
          <button
            startIcon={<FileDownloadIcon />}
            className="text-sm text-[#37abf0] py-2 px-3 rounded border border-[#37abf0] hover:opacity-90"
          >
            Export PDF
          </button>
        </Box>
      )}
    />
  );
};

export default DataTable;
