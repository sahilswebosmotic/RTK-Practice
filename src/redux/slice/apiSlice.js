import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', 

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), 

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
    getUpdatePost :builder.query({
      query:()=>`/posts/1`,
    })
    ,
      updatePost: builder.mutation({
      query: (body) => ({
        url: `/posts/1`,
        method: 'PUT',
        body,
      }),
    }),
    deletePost : builder.mutation({
      query:(id) =>({
        url:`/posts/${id}`,
        method:'DELETE',
      })
    })
  }),
});

export const { useGetPostsQuery, useAddPostMutation,useUpdatePostMutation,useDeletePostMutation,useGetUpdatePostQuery } = apiSlice;

