import { apiSlice } from "../api/api-slice";

export const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    priceCreate: builder.mutation({
      query: (data) => {
        return {
          url: "/bucket-price-settings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Price"],

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
    getPrice: builder.query({
      query: (limit: number) => {
        return {
          url: `/bucket-price-settings?page=1&limit=${limit}&sort=asc`,
          method: "GET",
        };
      },

      providesTags: ["Price"],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("profile response =>", result);
        } catch (err) {
          console.log("profile error ==>", err);
        }
      },
    }),

    deletePrice: builder.mutation({
      query: (id) => {
        return {
          url: "/bucket-price-settings/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Price"],
    }),
  }),
});

export const {
  useGetPriceQuery,
  usePriceCreateMutation,
  useDeletePriceMutation,
} = loginSlice;
