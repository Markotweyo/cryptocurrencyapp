import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const CryptoApiHeaders= {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '250b0b6cd8msh35c80bf0b33d12dp1e6728jsn4b186c846ff8'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url)=>({url, headers: CryptoApiHeaders})

export const cryptoApi =createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count)=> createRequest(`/coins?limit=${count}`)
        }),
        getExchange: builder.query({
            query: ()=> createRequest('/exchanges')
        }),
        getCryptoDetails: builder.query ({
            query: (coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query ({
            query: (coinId, timeperiod)=> createRequest(`/coin/${coinId}/history/${timeperiod}`)
        }),
    }),
});

export const { useGetCryptosQuery, useGetExchangeQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery }= cryptoApi