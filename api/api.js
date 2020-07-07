import axios from 'axios';
const baseURL = 'https://hacker-news.firebaseio.com/v0';

export function fetchIds(type) {
  console.log('type', type)
  return axios
    .get(
      `${baseURL}/${type}stories.json?print=pretty&orderBy="$key"&limitToFirst=10`
    )
    .then((res) => {
      return res.data;
    });
}
