import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const titlesApi = createApi({
  reducerPath: "titles",  
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesdatabase.p.rapidapi.com/titles/",
    headers: {
      'X-RapidAPI-Key': 'ef6e11a163mshfa71893e48cf295p1636e7jsn7a2a0d24b503',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    },   
  }),
  endpoints: (build) => ({
    //returns array of episodes only with episode id, episode number and season number in ascending order
    getSeries: build.query({
      query: (seriesid) =>
        `series/${seriesid}`,
     
    }),
    //returns array of upcoming titles according to filters / sorting query parameters provided
    getUpcoming: build.query({
      query: ({titleType, year, genre, info, endYear, limit, sort, page, startYear}) =>
        `x/upcoming?${
          titleType ? `titleType=${titleType}`:''}${
          year ? `&year=${year}`:''}${
          genre ? `&genre=${genre}`:''}${
          info ? `&info=${info}`:''}${
          endYear ? `&endYear=${endYear}`:''}${
          limit ? `&limit=${limit}`:''}${
          sort ? `&sort=${sort}`:''}${
          page ? `&page=${page}`:''}${
          startYear ? `&startYear=${startYear}`:''}`,
     
    }),
    
    ///?
    getSeason: build.query({
      query: ({seriesId, season}) =>
        `series/${seriesId}/${season}`,     
    }),
    //returns episode according to filters / sorting query parameters provided
    getEpisod: build.query({
      query: ({id, info}) =>
        `episode/${id}${info ? `?info=${info}` : '' }`  
    }),

    getTitles: build.query({
      query: ({titleType, year, genre, info, endYear, limit, sort, page, list, startYear}) =>
        `x/upcoming?${
          titleType ? `titleType=${titleType}`:''}${
          year ? `&year=${year}`:''}${
          genre ? `&genre=${genre}`:''}${
          info ? `&info=${info}`:''}${
          endYear ? `&endYear=${endYear}`:''}${
          limit ? `&limit=${limit}`:''}${
          sort ? `&sort=${sort}`:''}${
          page ? `&page=${page}`:''}${
          list ? `&page=${list}`:''}${
          startYear ? `&startYear=${startYear}`:''}`,
     
    }),
  }),
});


export const searchApi = createApi({
  reducerPath: "search",  
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesdatabase.p.rapidapi.com/titles/search",
    headers: {
      'X-RapidAPI-Key': 'ef6e11a163mshfa71893e48cf295p1636e7jsn7a2a0d24b503',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    },   
  }),
  endpoints: (build) => ({
    
    //search by keyword
    getSearchKeywords: build.query({
      query: ({keyword, titleType, year, info, endYear, limit, sort, page, startYear}) =>
        `keyword/${keyword}?${
          titleType ? `titleType=${titleType}`:''}${
          year ? `&year=${year}`:''}${          
          info ? `&info=${info}`:''}${
          endYear ? `&endYear=${endYear}`:''}${
          limit ? `&limit=${limit}`:''}${
          sort ? `&sort=${sort}`:''}${
          page ? `&page=${page}`:''}${
          startYear ? `&startYear=${startYear}`:''}`     
    }),

    //search by title
    getSearchTitle: build.query({
      query: ({title, exact, titleType, year, info, endYear, limit, sort, page, startYear, list}) =>
        `title/${title}?${
          exact ? `exact=${exact}`:''}${
          titleType ? `titleType=${titleType}`:''}${
          year ? `&year=${year}`:''}${          
          info ? `&info=${info}`:''}${
          endYear ? `&endYear=${endYear}`:''}${
          limit ? `&limit=${limit}`:''}${
          sort ? `&sort=${sort}`:''}${
          page ? `&page=${page}`:''}${
          list ? `&list=${list}`:''}${
          startYear ? `&startYear=${startYear}`:''}`     
    }), 
  }),
});

export const utilsApi = createApi({
  reducerPath: "utils",  
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesdatabase.p.rapidapi.com/titles/utils",
    headers: {
      'X-RapidAPI-Key': 'ef6e11a163mshfa71893e48cf295p1636e7jsn7a2a0d24b503',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    },   
  }),
  endpoints: (build) => ({    
   
    getGenres: build.query({
      query: () =>`genres`
    }),   

    getLists: build.query({
      query: () =>`lists`
    }),  

    getTitleTypes: build.query({
      query: () =>`titleTypes`
    }),  

  }),
});


export const { useGetSeriesQuery, useGetUpcomingQuery, useGetSeasonQuery, useGetEpisodQuery, useGetTitlesQuery,} =
titlesApi;

export const { useLazyGetSearchKeywordsQuery, useLazyGetSearchTitleQuery } =
searchApi;

export const { useGetGenresQuery,  useGetListsQuery, useGetTitleTypesQuery} =
utilsApi;








