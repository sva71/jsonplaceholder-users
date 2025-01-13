import axios from 'axios';

export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
export const API_USERS_URL = `${API_BASE_URL}/users`;

export const loadUsers = (searchString: string) =>
  searchString ? axios.get(API_USERS_URL, { params: { name_like: searchString } }) : axios.get(API_USERS_URL);
export const loadSelectedUser = (id: string) =>
  axios.get(API_USERS_URL, { params: { id } });
