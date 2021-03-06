import React, { useEffect, useState } from "react";
import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import { userApi } from "../reducers/userReducer/userApi";
import { SuccessAlerts } from "../../alert";
import { Box } from "@material-ui/core";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [getUsers, { isLoading }] = userApi.useLazyGetUsersQuery();
  const [deleteUser] = userApi.useLazyDeleteUserQuery();

  const onDeleteUser = async (id) => {
    let res = await deleteUser(id);
    if (res?.data?.status === 201) {
      setDeleteSuccess(true);
      loadUsersData();
    }
  };

  const loadUsersData = async () => {
    let { data } = await getUsers();
    if (data?.data) {
      const result = [];
      data.data.map((el, idx) =>
        result.push({ ...el.attributes, id: el.id, sn: idx + 1 })
      );
      setUserData([...result]);
    }
  };

  const columns = [
    { field: "sn", headerName: "S.N", width: 100 },
    { field: "userName", headerName: "User Name", width: 150 },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 150,
    },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "Admin",
      headerName: "Admin",
      width: 115,
      renderCell: (params) => {
        return (
          <>
            {params.row.isAdmin ? (
              <CheckCircleIcon className="check-icon" />
            ) : (
              <CancelIcon className="cancel-icon" />
            )}
          </>
        );
      },
    },

    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: 200,
    },

    {
      field: "updatedAt",
      headerName: "UpdatedAt",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => onDeleteUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    loadUsersData();
  }, []);

  return (
    <>
      <div className="userList">
        {deleteSuccess && (
          <SuccessAlerts message={"User was successfully deleted"} />
        )}
        <Box sx={{ height: 380, width: "100%" }}>
          <DataGrid
            rows={userData}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            loading={isLoading}
          />
        </Box>

        <Link to="/newuser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
    </>
  );
};

export default UserList;
