import { api } from ".";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUser: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["User"],
    }),
    // Post request
    createUser: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Patch request
    updateUser: build.mutation({
      query: ({ _id, body }) => ({
        url: `/users/:${_id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Delete request
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
} = userApi;
