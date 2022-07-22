import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authorApi = createApi({
  reducerPath: "authorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_END_POINT}/author`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.user.data.accessToken;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAuthors: builder.query({
      query: () => {
        return {
          url: "authors",
          method: "GET",
        };
      },
    }),
    getAuthor: builder.query({
      query: (id) => {
        return {
          url: `${id}`,
          method: "GET",
        };
      },
    }),
    createAuthor: builder.mutation({
      query: (data) => {
        return {
          url: "",
          method: "POST",
          body: data,
        };
      },
    }),
    updateAuthor: builder.mutation({
      query: (data) => {
        return {
          url: "",
          method: "PATCH",
          body: data,
        };
      },
    }),
    deleteAuthor: builder.query({
      query: (id) => {
        return {
          url: `${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
