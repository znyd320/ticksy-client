import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { invalidTag } from "../../utils/InvalidTag";
import { apiUrl } from "../../utils/apiUrl";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: '', // Production
    baseUrl: apiUrl, // Staging
    // baseUrl: "http://202.91.42.198:3900/api/v1", // Staging
    prepareHeaders: async (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("rekoul_token")}`
      );

      return headers;
    },
  }),
  tagTypes: [...invalidTag],
  endpoints: () => ({}),
});
