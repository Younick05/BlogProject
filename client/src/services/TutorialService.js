import http from "../http-common";


const upload = data => {
  return http.post("/postmessage", data);
}

const getAll = () => {
  return http.get("/postmessage");
};

const get = id => {
  return http.get(`/postmessage/${id}`);
};

const create = data => {
  return http.post("/postmessage", data);
};

const update = (id, data) => {
  return http.put(`/postmessage/${id}`, data);
};

const remove = id => {
  return http.delete(`/postmessage/${id}`);
};

const removeAll = () => {
  return http.delete(`/postmessage`);
};

const findByTitle = title => {
  return http.get(`/postmessage?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  upload
};