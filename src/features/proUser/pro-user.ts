import { apiSlice } from "../api/api-slice";

export const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // * Pro User Create
    proUserCreate: builder.mutation({
      query: (data) => {
        return {
          url: "/pro-user-finance",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["proUser"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error: any) {
          console.log(error?.error);
        }
      },
    }),

    // * Update Pro User
    proUserUpdate: builder.mutation({
      query: (data) => {
        console.log("data.data", data.data);

        return {
          url: "/pro-user-finance/" + data.id,
          method: "PATCH",
          body: data.data,
        };
      },
      invalidatesTags: ["proUser"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error: any) {
          console.log(error?.error);
        }
      },
    }),

    // * Pro User Get
    getProUser: builder.query({
      query: () => {
        return {
          url: "pro-user-finance?page=1&limit=1000&sort=desc",
          method: "GET",
        };
      },

      providesTags: ["proUser"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("profile response =>", result);
        } catch (err) {
          console.log("profile error ==>", err);
        }
      },
    }),

    deleteProUser: builder.mutation({
      query: (id) => {
        return {
          url: "/pro-user-finance/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["proUser"],
    }),
  }),
});

export const {
  useProUserCreateMutation,
  useGetProUserQuery,
  useDeleteProUserMutation,
  useProUserUpdateMutation,
} = loginSlice;
