import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_END_POINT}/user`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user.data.accessToken;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => {
        return {
          url: "users",
          method: "GET",
        };
      },
    }),
    getUser: builder.query({
      query: (id) => {
        return {
          url: `${id}`,
          method: "GET",
        };
      },
    }),
    createUser: builder.mutation({
      query: (data) => {
        return {
          url: "",
          method: "POST",
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: "",
          method: "PATCH",
          body: data,
        };
      },
    }),
    deleteUser: builder.query({
      query: (id) => {
        return {
          url: `${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
