import axios from 'axios';
const baseURL = 'https://hacker-news.firebaseio.com/v0';

export function fetchIds() {
  return axios
    .get(
      `${baseURL}/topstories.json?print=pretty&orderBy="$key"&limitToFirst=10`
    )
    .then((res) => {
      return res.data;
    });
}
