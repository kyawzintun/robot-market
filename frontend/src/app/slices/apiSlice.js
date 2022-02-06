import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kzt-robot-market.herokuapp.com/api",
  }),
  tagTypes: ["Robot"],
  endpoints: (builder) => ({
    getRobots: builder.query({
      query: () => "/robots",
      transformResponse: (response) => response?.data,
      providesTags: (result = [], error, arg) => [
        "Robot",
        ...result.map(({ id }) => ({ type: "Robot", id })),
      ],
    }),
  }),
});

export const { useGetRobotsQuery } = apiSlice;
