import React, { useEffect, useState } from "react";
import "../userList/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import { userApi } from "../reducers/userReducer/userApi";
import { SuccessAlerts } from "../../alert";
import { Box } from "@material-ui/core";
import { authorApi } from "../reducers/authorReducer/authorApi";

const AuthorList = () => {
  const [authorData, setAuthorData] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [getAuthors, { isLoading }] = authorApi.useLazyGetAuthorsQuery();
  const [deleteAuthor] = authorApi.useLazyDeleteAuthorQuery();

  const onDeleteUser = async (id) => {
    let res = await deleteAuthor(id);
    if (res?.data?.status === 201) {
      setDeleteSuccess(true);
      loadUsersData();
    }
  };

  const loadUsersData = async () => {
    let { data } = await getAuthors();
    if (data?.data) {
      const result = [];
      data.data.map((el, idx) =>
        result.push({ ...el.attributes, id: el.id, sn: idx + 1 })
      );
      authorData([...result]);
    }
  };

  const columns = [
    { field: "sn", headerName: "S.N", width: 100 },
    {
      field: "userName",
      headerName: "User Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={`https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80`}
              alt=""
            />
            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 150,
    },
    { field: "email", headerName: "Email", width: 150 },

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
            <Link to={"/author/" + params.row.id}>
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
            rows={authorData}
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

export default AuthorList;
