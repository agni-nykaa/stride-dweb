export const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/';

interface QueryParamsObject {
  [key: string]: string;
}

export const queryStringObjectFromUrl = (url: string = '') => {
  const queryString = url?.split('?')[1];
  const params = new URLSearchParams(queryString);
  const result: QueryParamsObject = {};
  params?.forEach((val, key) => {
    result[key] = val;
  });
  return result;
};

export const embeddedVideoUrl = (url: string): string => {
  const queryStringObject = queryStringObjectFromUrl(url);
  const videoId = queryStringObject?.v;
  return `${YOUTUBE_EMBED_URL}${videoId}`;
};

