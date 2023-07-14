import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesdatabase.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "ef6e11a163mshfa71893e48cf295p1636e7jsn7a2a0d24b503",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  }),
  endpoints: (build) => ({
    //returns array of episodes only with episode id, episode number and season number in ascending order
    getSeries: build.query({
      query: (seriesid) => `titles/series/${seriesid}`,
    }),
    //returns array of upcoming titles according to filters / sorting query parameters provided
    getUpcoming: build.query({
      query: ({
        titleType,
        year,
        genre,
        info,
        endYear,
        limit,
        sort,
        page,
        startYear,
      }) =>
        `titles/x/upcoming?${titleType ? `titleType=${titleType}` : ""}${
          year ? `&year=${year}` : ""
        }${genre ? `&genre=${genre}` : ""}${info ? `&info=${info}` : ""}${
          endYear ? `&endYear=${endYear}` : ""
        }${limit ? `&limit=${limit}` : ""}${sort ? `&sort=${sort}` : ""}${
          page ? `&page=${page}` : ""
        }${startYear ? `&startYear=${startYear}` : ""}`,
    }),

    ///?
    getSeason: build.query({
      query: ({ seriesId, season }) => `titles/series/${seriesId}/${season}`,
    }),
    //returns episode according to filters / sorting query parameters provided
    getEpisod: build.query({
      query: ({ id, info }) =>
        `titles/episode/${id}${info ? `?info=${info}` : ""}`,
    }),

    getTitles: build.query({
      query: ({
        titleType,
        year,
        genre,
        info,
        endYear,
        limit,
        sort,
        page,
        list,
        startYear,
      }) =>
        `titles/x/upcoming?${titleType ? `titleType=${titleType}` : ""}${
          year ? `&year=${year}` : ""
        }${genre ? `&genre=${genre}` : ""}${info ? `&info=${info}` : ""}${
          endYear ? `&endYear=${endYear}` : ""
        }${limit ? `&limit=${limit}` : ""}${sort ? `&sort=${sort}` : ""}${
          page ? `&page=${page}` : ""
        }${list ? `&page=${list}` : ""}${
          startYear ? `&startYear=${startYear}` : ""
        }`,
    }),

    //search by keyword
    getSearchKeywords: build.query({
      query: ({
        keyword,
        titleType,
        year,
        info,
        endYear,
        limit,
        sort,
        page,
        startYear,
      }) =>
        `search/keyword/${keyword}?${
          titleType ? `titleType=${titleType}` : ""
        }${year ? `&year=${year}` : ""}${info ? `&info=${info}` : ""}${
          endYear ? `&endYear=${endYear}` : ""
        }${limit ? `&limit=${limit}` : ""}${sort ? `&sort=${sort}` : ""}${
          page ? `&page=${page}` : ""
        }${startYear ? `&startYear=${startYear}` : ""}`,
    }),

    //search by title
    getSearchTitle: build.query({
      query: ({
        title,
        exact,
        titleType,
        year,
        info,
        endYear,
        limit,
        sort,
        page,
        startYear,
        list,
      }) =>
        `search/title/${title}?${exact ? `exact=${exact}` : ""}${
          titleType ? `titleType=${titleType}` : ""
        }${year ? `&year=${year}` : ""}${info ? `&info=${info}` : ""}${
          endYear ? `&endYear=${endYear}` : ""
        }${limit ? `&limit=${limit}` : ""}${sort ? `&sort=${sort}` : ""}${
          page ? `&page=${page}` : ""
        }${list ? `&list=${list}` : ""}${
          startYear ? `&startYear=${startYear}` : ""
        }`,
    }),

    getGenres: build.query({
      query: () => `titles/utils/genres`,
    }),

    getLists: build.query({
      query: () => `titles/utils/lists`,
    }),

    getTitleTypes: build.query({
      query: () => `titles/utils/titleTypes`,
    }),
  }),
});

export const {
  useGetSeriesQuery,
  useGetUpcomingQuery,
  useGetSeasonQuery,
  useGetEpisodQuery,
  useGetTitlesQuery,
  useLazyGetSearchKeywordsQuery,
  useLazyGetSearchTitleQuery,
  useGetGenresQuery,
  useGetListsQuery,
  useGetTitleTypesQuery,
} = api;
