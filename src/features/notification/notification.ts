import { apiSlice } from "../api/api-slice";

const notification = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postNotification: builder.mutation({
      query: (data) => {
        return {
          url: "/notification/users/push",
          method: "POST",
          body: data,
        };
      },
      //   invalidatesTags: ["notification"],
    }),
  }),
});

export const { usePostNotificationMutation } = notification;
