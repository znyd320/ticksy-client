import { apiSlice } from "../api/api-slice";

export const users = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // * Get User
    getAllUser: builder.query({
      query: (props) => {
        if (props?.search) {
          return {
            url: "/user?page=1&limit=100&sort=desc&search=" + props.search,
            method: "GET",
          };
        }

        return {
          url: "user?page=1&limit=100&sort=desc",
          method: "GET",
        };
      },

      providesTags: ["Users"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          console.log("profile response =>", result);
        } catch (err) {
          console.log("profile error ==>", err);
        }
      },
    }),

    // * User Update
    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user/" + data?._id,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Users"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error) {
          console.log(error);
        }
      },
    }),

    getSingleUser: builder.query({
      query: (id) => {
        return {
          url: "/user/" + id,
          method: "GET",
        };
      },

      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserMutation,
  useGetSingleUserQuery,
} = users;
