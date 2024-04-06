import { apliSlice } from "../api/apiSlice";
import { userLogin, userRegistration } from "./authSlice";

type RegistrationResponse = {
  activationToken: string;
  message: string;
};

type RegistrationData = {};

export const authApi = apliSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegistration: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          dispatch(
            userRegistration({
              token: response.data.activationToken,
            })
          );
        } catch (error) {
          console.error(error);
        }
      },
    }),
    activation: builder.mutation({
      query: ({ activationCode, activationToken }) => ({
        url: "/user/activate",
        method: "POST",
        body: { activationCode, activationToken },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login",
        method: "POST",
        body: { email, password },
        credentials: "include" as const,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          dispatch(
            userLogin({
              token: response.data.activationToken,
              user: response.data.user,
            })
          );
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useUserRegistrationMutation, useActivationMutation, useLoginMutation } = authApi;
