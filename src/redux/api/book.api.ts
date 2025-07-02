import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_BASE_URL;

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ["books", "id"],
  endpoints: (build) => ({
    getBooks: build.query({ query: () => "books", providesTags: ["books"] }),
    getBookById: build.query({
      query: (id) => `books/${id}`,
      providesTags: ["id"],
    }),
    updateBookById: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: ["books", "id"],
    }),
    deleteBookById: build.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books", "id"],
    }),
    borrowBookById: build.mutation({
      query: ({ ...body }) => ({
        url: `borrow`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["books", "id"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useUpdateBookByIdMutation,
  useDeleteBookByIdMutation,
  useBorrowBookByIdMutation,
} = bookApi;
