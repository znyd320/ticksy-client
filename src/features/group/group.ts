import { apiSlice } from "../api/api-slice";

export const groupSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createGroup: builder.mutation({
      query: (data) => {
        return {
          url: "/notification/group",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["group"],
    }),

    getGroup: builder.query({
      query: (props) => {
        if (props.search) {
          return {
            url:
              "/notification/group?page=1&limit=10&order=createdAt&sort=desc&search=" +
              props.search,
            method: "GET",
          };
        }
        return {
          url: "/notification/group?page=1&limit=10&order=createdAt&sort=desc",
          method: "GET",
        };
      },
      providesTags: ["group"],
    }),
  }),
});

export const { useGetGroupQuery, useCreateGroupMutation } = groupSlice;
