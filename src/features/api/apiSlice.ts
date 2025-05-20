import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-url.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => '/products'
    })
  })
})

export const { useGetProductsQuery } = apiSlice
