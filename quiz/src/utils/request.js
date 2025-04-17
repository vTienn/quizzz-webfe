const API_DOMAIN = " http://localhost:3002/";
export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  const data = await response.json();
  return data;
};
export const post = async (path, option) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option),
  });
  const data = await response.json();
  return data;
};
export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
export const patch = async (path, option) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option),
  });
  const data = await response.json();
  return data;
};
