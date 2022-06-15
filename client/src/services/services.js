import axios from 'axios';

const URL = 'http://localhost:7000/todo';

const connector = axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const apiModify = async (id, todo, isDone) => {
  await connector
    .put(`id/${id}/update`, { id, todo, isDone })
    .then((res) => res);
};

export const apiGetAll = async () => {
  return connector.get('/getall').then((res) => {
    return res.data ? res.data : [];
  });
};

export const apiDelete = async (id) => {
  return await connector.delete(`id/${id}/delete`, { id });
};

export const apiCreate = async (text) => {
  await connector.post('create', { todo: text });
};

export const apiDeleteAll = async () => {
  await connector.delete('delete_all');
};

export const apiCompleteAll = async () => {
  await connector.put('complete_all');
};
