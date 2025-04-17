import { get, post } from "../utils/request";

export const getAllTopic = async () => {
  const result = await get(`topics`);
  return result;
};
export const getTopicId = async (id) => {
  const result = await get(`topics/${id}`);
  return result;
};
