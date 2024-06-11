import { apiSlice } from "../api/api-slice";

export const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postFinance: builder.mutation({
      query: (data) => {
        return {
          url: "/finance-settings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["financeCreate"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error) {
          // console.log(error?.error);
        }
      },
    }),

    updateFinance: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: "/finance-settings/" + id,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["financeCreate"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error) {
          // console.log(error?.error);
        }
      },
    }),

    // * Get User
    getFinance: builder.query({
      query: (obj) => {
        return {
          url: `/finance-settings?page=${obj.page}&limit=${obj.limit}&sort=desc`,
          method: "GET",
        };
      },

      providesTags: ["financeCreate"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          console.log("finance response =>", result);
        } catch (err) {
          console.log("finance error ==>", err);
        }
      },
    }),

    deleteFinance: builder.mutation({
      query: (id) => {
        return {
          url: "/finance-settings/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["financeCreate"],
    }),
  }),
});

export const {
  useGetFinanceQuery,
  usePostFinanceMutation,
  useDeleteFinanceMutation,
  useUpdateFinanceMutation,
} = loginSlice;
