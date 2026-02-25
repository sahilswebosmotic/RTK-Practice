import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    addPost: builder.mutation({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
    }),
    getUpdatePost: builder.query({
      query: (id = 1) => `/posts/${id}`,
    }),
    updatePost: builder.mutation({
      query: ({ id = 1, ...body }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetUpdatePostQuery,
} = apiSlice;

