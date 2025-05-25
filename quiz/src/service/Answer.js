import { getCookie } from "../helpers/cookie";
import { get, post } from "../utils/request";

export const getUserAnswers = async () => {
  const userId = getCookie("id");
  const result = await get(`userAnswers?userId=${userId}`);
  return result;
};
export const collectAnswer = async (option) => {
  const result = await post(`userAnswers`, option);
  return result;
};
export const getResultAnswer = async (answerId) => {
  const result = await get(`userAnswers/${answerId}`);

  return result;
};
