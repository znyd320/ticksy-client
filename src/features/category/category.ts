import { apiSlice } from "../api/api-slice";

export const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => {
        return {
          url: "/bucket-category",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Category"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error: any) {
          console.log(error?.error);
        }
      },
    }),

    updateCategory: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: "/bucket-category/" + id,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Category"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error: any) {
          console.log(error?.error);
        }
      },
    }),

    getCategory: builder.query({
      query: () => {
        return {
          url: `/bucket-category?sort=asc`,
          method: "GET",
        };
      },

      providesTags: ["Category"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("profile response =>", result);
        } catch (err) {
          console.log("profile error ==>", err);
        }
      },
    }),

    deleteCategory: builder.mutation({
      query: (id) => {
        return {
          url: "/bucket-category/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} = loginSlice;
