import { apliSlice } from "../api/apiSlice";

export const userApi = apliSlice.injectEndpoints({
  endpoints: (builder) => ({
    myProfile: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
        credentials: "include" as const,
      }),
    }),

    updateProfile: builder.mutation({
        query: (data) => ({
          url: "/me/update",
          method: "PUT",
          body: data,
          credentials: "include" as const,
        }),
      }),
    changePassword: builder.mutation({
        query: (data) => ({
          url: "/password/update",
          method: "PUT",
          body: data,
          credentials: "include" as const,
        }),
      }),
    updateAvatar: builder.mutation({
        query: (data) => ({
          url: "/me/update/avatar",
          method: "PUT",
          body: data,
          credentials: "include" as const,
        }),
      }),
    
  }),
 
});
