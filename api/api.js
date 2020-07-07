import axios from 'axios';
const baseURL = 'https://hacker-news.firebaseio.com/v0';

export function fetchIds(type) {
  return axios
    .get(
      `${baseURL}/${type}stories.json?print=pretty&orderBy="$key"&limitToFirst=10`
    )
    .then((res) => {
      return res.data;
    });
}

export function fetchItems(ids) {
  return Promise.all(ids.map((id) => fetchItem(id)));
}

export function fetchItem(id) {
  return axios.get(`${baseURL}/item/${id}.json?print=pretty`);
}
