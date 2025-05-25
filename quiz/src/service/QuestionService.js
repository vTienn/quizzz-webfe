import { get, post } from "../utils/request";

export const getAllTopic = async () => {
  const result = await get(`topics`);
  return result;
};
export const getListQuestions = async (topicId) => {
  const result = await get(`questions?topicId=${topicId}`);
  return result;
};
