import { apiSlice } from "../api/api-slice";
import { logOutState, loginState } from "./auth";

export const loginSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // * Login
    login: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [],

      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error) {
          console.log(error);

          dispatch(logOutState());
        }
      },
    }),

    // * Get User
    getUser: builder.query({
      query: (id: string) => {
        return {
          url: "/user/" + id,
          method: "GET",
        };
      },

      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const userData = result?.data?.payload;
          const token = localStorage.getItem("rekoul_token");
          dispatch(
            loginState({
              token: token,
              user: userData,
            })
          );

          // console.log('profile response =>', result);
        } catch (err) {
          console.log("profile error ==>", err);
        }
      },
    }),

    // * Registration
    registration: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/registration",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error) {
          console.log(error);
          // Toast.show({
          //   type: 'error',
          //   text1: 'Opps, could not login',
          //   text2: error?.error?.data?.message,
          // });
          // dispatch(logOutState());
        }
      },
    }),

    // * OTP Submit
    otpSubmit: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/registration/verify/verificationcode",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [],

      async onQueryStarted(_data, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);
        } catch (error) {
          console.log(error);
        }
      },
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: "/user/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserQuery,
  useRegistrationMutation,
  useOtpSubmitMutation,
  useDeleteUserMutation,
} = loginSlice;
