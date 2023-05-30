import axios from "axios";

const API_URL = "";

export const API_GMAIL = async (urlObject, payload, type) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endPoint}/${type}`,
    data: payload,
  });
};
